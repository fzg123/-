import styles from './index.css'
import { AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons';
import Link from '../../../common/Link'
import { noDevelopment } from '@/_config'
export default function (props) {
    return (
        <div className={styles['top']}>
            <div className={styles['center']}>
                <div className={styles['left']}>
                    <Link to={'/personalData'}>
                        <img src={props.userHeadSculptureSrc} alt="" />
                        <div className={styles['msg']}>
                            <p>
                                {props.userName}
                            </p>
                            <p>
                                <span>{props.grade}</span>
                            </p>
                        </div>
                    </Link>


                </div>
                <div className={styles['right']}>
                    <Link to={noDevelopment}>
                        <AppstoreAddOutlined style={{ fontSize: '2.3rem', cursor: 'pointer', color: 'white' }} />

                    </Link>
                    <Link to={noDevelopment}>
                        <SettingOutlined style={{ fontSize: '2.3rem', cursor: 'pointer', marginLeft: 15, color: 'white' }} />
                    </Link>

                </div>
            </div>
        </div>
    )
}