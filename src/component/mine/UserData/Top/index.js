import styles from './index.css'
import { AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons';
import Link from '../../../common/Link'
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
                    <AppstoreAddOutlined style={{ fontSize: '2.3rem', cursor: 'pointer', color: 'white' }} />
                    <SettingOutlined style={{ fontSize: '2.3rem', cursor: 'pointer', marginLeft: 15, color: 'white' }} />
                </div>
            </div>
        </div>
    )
}