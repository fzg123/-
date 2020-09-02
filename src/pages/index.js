import styles from './index.css'
import TakeTurns from '../component/TakeTurns'
import { useEffect, useState } from 'react'
import Nav from '../component/home/Nav'
import FlashSale from '../component/home/FlashSale'
import { createRef } from 'react'
import Advert from '../component/home/Advert'
import HopShop from '@/component/home/HotShop'
import Inessential from '../component/common/Inessential'
import Center from '../component/common/Center'
import { connect } from 'dva'
function Home(props) {
  const [imgSrcs, setImgSrcs] = useState([`https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js`, 'https://dummyimage.com/1030x298', 'https://dummyimage.com/1030x298'])
  const [TakeTurnsWidth, setTakeTurnsWidth] = useState(0);
  const primaryRef = createRef();
  useEffect(() => {

    window.onresize = () => {
      if (primaryRef.current != null) {
        setTakeTurnsWidth(primaryRef.current.offsetWidth);
      }

    }
    setTakeTurnsWidth(primaryRef.current.offsetWidth);
    return () => {
      window.onresize = null;
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
          waitAutoTime={2000}
        ></TakeTurns>

        <Nav loginData={props.loginData}></Nav>
        <FlashSale TakeTurnsWidth={TakeTurnsWidth} />
        <Advert onClick={() => { }} imgSrc={'https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js'} />

        <HopShop />
        <Inessential />


      </div>
    </>
  );
}


export default connect(state => ({ loginData: state.loginData }))(Home);