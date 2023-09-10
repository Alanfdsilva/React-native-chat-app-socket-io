export type DefaultNavigationProps = {
    navigate: (screen: string, params?: any) => void;
    goBack: () => void;
    dispatch: (callback: any) => void;
}