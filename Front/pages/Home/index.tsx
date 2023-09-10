import React, { useEffect, useRef, useState } from "react";

import * as S from './styles'

import { Input } from "../../components/Input";

import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { CommentBox } from "../../components/CommentBox";
import { useNavigation, useRoute } from "@react-navigation/native";

import io, { Socket } from 'socket.io-client';
import { FlatList, Text } from "react-native";
import { Header } from "../../components/Header";


type RouteParams = {
    userName: string;
}

type message = {
    content: string;
    type?: 'chat' | 'loginEvent';
    userName: string;
}

export function Home() {
    const [userText, setUserText] = useState('');
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messages, setMessages] = useState<message[]>([]);
    const [qtdUsers, setQtdUsers] = useState(0);

    const flatListRef = useRef(null);

    const route = useRoute();
    const navigation = useNavigation();

    const params = route.params as RouteParams;

    useEffect(() => {
        const socketInstance = io(process.env.REACT_APP_SOCKET_URL);
        socketInstance.on('chat message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
            setQtdUsers(message.activeUsers);
        });

        setSocket(socketInstance);

        const loginMessage = {
            type: 'loginEvent',
            content: `Usuário ${params.userName} entrou no chat`,
            userName: params.userName,
        };

        socketInstance.emit('chat message', loginMessage);

        return () => {
            socketInstance.disconnect();
        };
    }, []);

    function handleSendMessage() {
        if(!!userText) {
            const message = {
                type: 'chat',
                userName: params.userName,
                content: userText,         
              };
          
              socket?.emit('chat message', message);
              
              flatListRef.current?.scrollToEnd();
              setUserText('');
        }
    }

    return (
        <>
            <Header title="Sair da Conta" navigate={() => navigation.goBack()}/>
            <S.Container>    
                <S.ListContainer>   
                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item: message } : {item:message}) => (
                            <>
                                {
                                    message.type === 'chat'? (
                                        <S.CommentListContainer>
                                            <CommentBox 
                                                content={message.content}
                                                name={message.userName} 
                                                commentType={message.userName === params.userName ? 'currentUser' : 'otherUsers'}
                                            />
                                        </S.CommentListContainer>
                                    ) : (
                                        <S.LoginEventText>
                                            {message.content}
                                        </S.LoginEventText>
                                    )
                                }
                            </>
                        )}
                    />
                </S.ListContainer>
                <S.TotalUsersContainer>
                    <S.TotalUsersText>
                        Usuários totais: {qtdUsers}
                    </S.TotalUsersText>
                </S.TotalUsersContainer>
                <S.InputContainer>
                    <S.InputLimiter>
                        <Input 
                            placeholder="Digite sua dúvida"
                            value={userText}
                            onChangeText={setUserText}
                        />
                    </S.InputLimiter>
                    <S.SendButton onPress={handleSendMessage}>
                        <Ionicons 
                            name="send-sharp" 
                            size={20} 
                            style={{marginLeft: 4}}
                            color="white" 
                        />
                    </S.SendButton>
                </S.InputContainer>
            </S.Container>
        </>
    )
}