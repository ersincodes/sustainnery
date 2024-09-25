'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconMinus from '@/components/icon/icon-minus';
import IconMenuUsers from '@/components/icon/menu/icon-menu-users';
import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication';
import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import IconWheel from '../icon/icon-wheel';
import IconSun from '../icon/icon-sun';
import IconTrash from '../icon/icon-trash';
import IconTrashLines from '../icon/icon-trash-lines';
import IconNotes from '../icon/icon-notes';
import IconLayout from '../icon/icon-layout';
import IconMultipleForwardRight from '../icon/icon-multiple-forward-right';
import IconFile from '../icon/icon-file';
import IconDroplet from '../icon/icon-droplet';
import IconCpuBolt from '../icon/icon-cpu-bolt';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="flex h-full flex-col bg-white dark:bg-black">
                    <div className="mb-5 mt-5 flex h-10 flex-shrink-0 items-center justify-between px-5">
                        <Link href="/" className="main-logo flex items-center justify-center">
                            <img className="h-auto w-44" src="/assets/images/logo.png" alt="Sustainnery" />
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                            <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                                <li className="menu nav-item">
                                    <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                        <div className="flex items-center">
                                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('dashboard')}</span>
                                        </div>

                                        <div className={currentMenu !== 'dashboard' ? '-rotate-90 rtl:rotate-90' : ''}>
                                            <IconCaretDown />
                                        </div>
                                    </button>

                                    <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                        <ul className="sub-menu text-gray-500">
                                            <li>
                                                <Link href="/">{t('analytics')}</Link>
                                            </li>
                                        </ul>
                                    </AnimateHeight>
                                </li>

                                <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                    <IconMinus className="hidden h-5 w-4 flex-none" />
                                    <span>{t('Management')}</span>
                                </h2>

                                <li className="nav-item">
                                    <ul>
                                        <li className="nav-item">
                                            <Link href="/management/production" className="group">
                                                <div className="flex items-center">
                                                    <IconWheel className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('production_management')}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/management/energy" className="group">
                                                <div className="flex items-center">
                                                    <IconSun className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('energy_management')}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/management/water" className="group">
                                                <div className="flex items-center">
                                                    <IconDroplet className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('water_management')}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/management/waste" className="group">
                                                <div className="flex items-center">
                                                    <IconTrash className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('waste_management')}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/management/waste-water" className="group">
                                                <div className="flex items-center">
                                                    <IconTrashLines className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('waste_water_management')}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/management/rsl" className="group">
                                                <div className="flex items-center">
                                                    <IconNotes className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('rsl_management')}</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/management/chemical" className="group">
                                                <div className="flex items-center">
                                                    <IconLayout className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('chemical_management')}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                    <IconMinus className="hidden h-5 w-4 flex-none" />
                                    <span>{t('objectives')}</span>
                                </h2>

                                <li className="menu nav-item">
                                    <Link href="/charts" className="group">
                                        <div className="flex items-center">
                                            <IconMultipleForwardRight className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('objective_definition')}</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="menu nav-item">
                                    <Link href="/widgets" className="group">
                                        <div className="flex items-center">
                                            <IconFile className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('tracking_forms')}</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="menu nav-item">
                                    <Link href="/font-icons" className="group">
                                        <div className="flex items-center">
                                            <IconCpuBolt className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('objective_oriented_operations')}</span>
                                        </div>
                                    </Link>
                                </li>

                                <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                    <IconMinus className="hidden h-5 w-4 flex-none" />
                                    <span>{t('user_and_pages')}</span>
                                </h2>

                                <li className="menu nav-item">
                                    <button type="button" className={`${currentMenu === 'users' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('users')}>
                                        <div className="flex items-center">
                                            <IconMenuUsers className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('users')}</span>
                                        </div>

                                        <div className={currentMenu !== 'users' ? '-rotate-90 rtl:rotate-90' : ''}>
                                            <IconCaretDown />
                                        </div>
                                    </button>

                                    <AnimateHeight duration={300} height={currentMenu === 'users' ? 'auto' : 0}>
                                        <ul className="sub-menu text-gray-500">
                                            <li>
                                                <Link href="/users/profile">{t('profile')}</Link>
                                            </li>
                                            <li>
                                                <Link href="/users/user-account-settings">{t('account_settings')}</Link>
                                            </li>
                                        </ul>
                                    </AnimateHeight>
                                </li>

                                <li className="menu nav-item">
                                    <button type="button" className={`${currentMenu === 'auth' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('auth')}>
                                        <div className="flex items-center">
                                            <IconMenuAuthentication className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('authentication')}</span>
                                        </div>

                                        <div className={currentMenu !== 'auth' ? '-rotate-90 rtl:rotate-90' : ''}>
                                            <IconCaretDown />
                                        </div>
                                    </button>

                                    <AnimateHeight duration={300} height={currentMenu === 'auth' ? 'auto' : 0}>
                                        <ul className="sub-menu text-gray-500">
                                            <li>
                                                <Link href="/auth/boxed-signin" target="_blank">
                                                    {t('login_boxed')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/boxed-signup" target="_blank">
                                                    {t('register_boxed')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/boxed-lockscreen" target="_blank">
                                                    {t('unlock_boxed')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/boxed-password-reset" target="_blank">
                                                    {t('recover_id_boxed')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/cover-login" target="_blank">
                                                    {t('login_cover')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/cover-register" target="_blank">
                                                    {t('register_cover')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/cover-lockscreen" target="_blank">
                                                    {t('unlock_cover')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/auth/cover-password-reset" target="_blank">
                                                    {t('recover_id_cover')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </AnimateHeight>
                                </li>
                                <li className="menu nav-item">
                                    <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                        <div className="flex items-center">
                                            <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('documentation')}</span>
                                        </div>
                                    </Link>
                                </li>

                                <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                    <IconMinus className="hidden h-5 w-4 flex-none" />
                                    <span>{t('legal_requirements')}</span>
                                </h2>

                                <li className="menu nav-item">
                                    <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                        <div className="flex items-center">
                                            <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('business_permissions')}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="menu nav-item">
                                    <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                        <div className="flex items-center">
                                            <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('periodic_inspection')}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="menu nav-item">
                                    <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                        <div className="flex items-center">
                                            <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('calibration')}</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </PerfectScrollbar>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
