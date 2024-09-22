'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store'; // Update this import to match your new store file
import { toggleRTL, toggleTheme, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from '@/store/themeConfigSlice';
import Loading from '@/components/layouts/loading';
import { getTranslation } from '@/i18n';
import { ModalManager } from './components/modals/ModalManager';
import { ModalProvider } from './components/modals/ModalProvider';
import { useAppDispatch, useAppSelector } from './hooks/useRedux'; // Import the typed hooks

function AppContent({ children }: PropsWithChildren) {
    const themeConfig = useAppSelector((state) => state.themeConfig);
    const dispatch = useAppDispatch();
    const { initLocale } = getTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
        // locale
        initLocale(themeConfig.locale);

        setIsLoading(false);
    }, [dispatch, initLocale, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

    return (
        <div
            className={`${(themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${
                themeConfig.rtlClass
            } main-section relative font-nunito text-sm font-normal antialiased`}
        >
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {children}
                    <ModalManager />
                </>
            )}
        </div>
    );
}

function App({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <ModalProvider>
                <AppContent>{children}</AppContent>
            </ModalProvider>
        </Provider>
    );
}

export default App;
