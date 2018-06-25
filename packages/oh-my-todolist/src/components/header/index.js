import React from 'react';
import styled from 'styled-components';
import { backgroundColor, borderColor, foreColor } from 'styles/themes';
import { spacing } from 'styles/variables';
import { 
    IconLightMenuToggle,
    IconLightLogo,
    IconGear,
    IconLightAddTask,
    IconLightNotification,
    IconLightSearch,
    IconNeedsSyncYellow 
} from 'components/icons';
import Styles from './index.css';

const TopBar = styled.div`
    height: 43px;
    top: 0;
    position: fixed;
    z-index: 200;
    width: 100%;
    border-bottom: solid 1px ${borderColor};
    background-color: ${backgroundColor};
    color: ${foreColor};
    transition: height 200ms ease-in;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
`;

const TopbarInner = styled.div`
    max-width: ${spacing.maxWidth};
    height: 100%;
    margin: 0 auto;
    position: relative;
`

const LeftMenuToggle = styled.a`
    padding: 5px 0;
    padding-right: 5px;
    display: none;
`

export default (props) => {
    const placeholderImage = 'https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif';
    return (
        <TopBar>
            <TopbarInner>
                <LeftMenuToggle>
                    <IconLightMenuToggle />
                </LeftMenuToggle>
                <div id="logo" data-track="navigation|todoist_logo" className={Styles.logo}>
                    <a href="#">
                        <IconLightLogo />
                    </a>
                </div>
                <div id="top_icons" className={Styles.topIcons}>
                    <span id="sync_state_icon" className={Styles.topIconSpan}>
                        <a href="#">
                           <IconNeedsSyncYellow />
                        </a>
                    </span>
                    <span data-track="navigation|quick_add" id="quick_add_task_holder" className={Styles.quickAddAndTaskHolder}>
                        <IconLightAddTask />
                    </span>
                    <span id="top_completed_holder" className={Styles.completedHolder}>
                        <a href="#completed" className={Styles.completedHolderLink}>
                            <span id="top_completed" className={Styles.completed} data-track="navigation|karma">
                            <svg viewBox="-2 -2 4 4" style={{ transform: 'rotate(-90deg)', width: '25px', height: '25px' }}>
                                <circle cx="0" cy="0" r="1.4" fill="none" visibility="visible" stroke="#ffffff" strokeWidth="0.2"></circle>
                                <path fill="#ffffff" d="M 1 0 A 1 1 0 1 1 -0.8090169943749475 -0.587785252292473 L 0 0"></path>
                            </svg>
                            <span className={Styles.completedCount}>100</span>
                            </span>
                        </a>
                    </span>
                    <span id="notifications_counter" className={Styles.notificationCount}>
                        <span className="fixed_pos">
                            <IconLightNotification />
                        </span>
                    </span>
                    <span id="gear_holder" className={Styles.gearHolder} data-track="navigation|gear">
                        <IconGear />
                    </span>
                </div>
                <div id="quick_find" className={Styles.search}>
                    <div>
                        <IconLightSearch />
                        <input className={Styles.inputSearch} type="text text_box" placeholder="Quick Find" autoComplete="off" autoCorrect="off" spellCheck="false" />
                        <a href="/Help/Filtering" className="help_icon" target="_blank" data-track="navigation|quick_find_help">
                            <img src={placeholderImage} width="16" height="16" className="cmp_light_query_help" />
                        </a>
                    </div>
                </div>
            </TopbarInner>
        </TopBar>
    );
}
