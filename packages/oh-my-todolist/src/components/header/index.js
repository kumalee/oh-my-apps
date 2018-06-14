import React from 'react';
import Styles from './index.css';

export default (props) => {
    const placeholderImage = 'https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif';
    return (
        <div id="top_bar" className={Styles.topbar}>
            <div id="top_bar_inner" className={Styles.topBarInner}>
                <a href="#" className={Styles.leftMenuToggle}>
                    <img src={placeholderImage} width="20" height="15" className={Styles.iconLightMenuToggle} />
                </a>
                <div id="logo" data-track="navigation|todoist_logo" className={Styles.logo}>
                    <a href="#">
                        <img src={placeholderImage} width="30" height="30" className={Styles.iconLightLogo} />
                    </a>
                </div>
                <div id="top_icons" className={Styles.topIcons}>
                    <span id="sync_state_icon" className={Styles.topIconSpan}>
                        <a href="#">
                            <img src={placeholderImage} width="16" height="16" className={Styles.iconNeedsSyncYellow} />
                        </a>
                    </span>
                    <span data-track="navigation|quick_add" id="quick_add_task_holder" className={Styles.quickAddAndTaskHolder}>
                        <img src={placeholderImage} width="26" height="16" className={Styles.iconLightAddTask} />
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
                            <img src={placeholderImage} width="22" height="17" className={Styles.iconLightNotification} />
                        </span>
                    </span>
                    <span id="gear_holder" className={Styles.gearHolder} data-track="navigation|gear">
                        <img src={placeholderImage} width="26" height="16" className={Styles.iconGearHolder} />
                    </span>
                </div>
                <div id="quick_find" className={Styles.search}>
                    <div>
                        <img src={placeholderImage} width="16" height="16" className={Styles.iconLightSearch} />
                        <input className={Styles.inputSearch} type="text text_box" placeholder="Quick Find" autoComplete="off" autoCorrect="off" spellCheck="false" />
                        <a href="/Help/Filtering" className="help_icon" target="_blank" data-track="navigation|quick_find_help">
                            <img src={placeholderImage} width="16" height="16" className="cmp_light_query_help" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
