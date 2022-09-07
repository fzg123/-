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
import { lunBoData } from '../_config'
import joinImgSrc from '../utils/joinImgSrc'
function Home(props) {
  const [alternateData, setalternateData] = useState([]);

  const [TakeTurnsWidth, setTakeTurnsWidth] = useState(0);
  const primaryRef = createRef();
  useEffect(() => {
    if (primaryRef.current != null) {  // 给轮播图容器定宽
      setTakeTurnsWidth(primaryRef.current.offsetWidth);
    }
  }, [])
  useEffect(() => {
    // 由于后台并没有提供数据 这里使用 mock 数据 顶替
    setalternateData(lunBoData);
  }, [])

  return (

    <>

      <div ref={primaryRef} className={styles.primary}>
        <TakeTurns
          imgSrcs={alternateData.map(e => e.fruitImagesUrl)}
          imgHrefs={alternateData.map(e => '/shopDetail/' + e.fruitId)}
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