import styles from './index.css'
import TakeTurns from '../component/TakeTurns'
import { useEffect, useState } from 'react'
import Nav from '../component/home/Nav'
import FlashSale from '../component/home/FlashSale'
import { createRef } from 'react'
import Advert from '../component/home/Advert'
import HopShop from '@/component/home/HotShop'
import Inessential from '../component/common/Inessential'
import { connect } from 'dva'
import hd from '../assets/min-img/img/hd.png'
function Home(props) {
  
  const [imgSrcs, setImgSrcs] = useState([`http://zaima.cool:8888/fruitImages/拼盘1.jpg`, 'http://zaima.cool:8888/fruitImages/拼盘2.jpg', 'http://zaima.cool:8888/fruitImages/西瓜1.jpg'])
  const [TakeTurnsWidth, setTakeTurnsWidth] = useState(0);
  const primaryRef = createRef();
  const [loading, setloading] = useState(false); // 加载状态
  useEffect(() => {
    if (primaryRef.current != null) {  // 给轮播图容器定宽
      setTakeTurnsWidth(primaryRef.current.offsetWidth);
    }
  }, [])
  return (

    <>

      <div ref={primaryRef} className={styles.primary}>


        <TakeTurns
          imgSrcs={imgSrcs}
          imgHrefs={['/', '/', '/']}
          width={TakeTurnsWidth - 40}
          height={'19rem'}
          howFreight={'img'}
          flagAuto={false}
          waitAutoTime={2000}
        ></TakeTurns>

        <Nav loginData={props.loginData}></Nav>
        <FlashSale TakeTurnsWidth={TakeTurnsWidth} />
        <Advert onClick={() => { }} imgSrc={hd} />

        <HopShop />
        <Inessential />
      </div>


    </>
  );
}

const mapStateToProps = state => ({
  loginData: state.loginData,
  address: state.selectAddress
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Home);