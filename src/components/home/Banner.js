import React, { useEffect } from 'react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import WOW from 'wowjs';
import 'animate.css';

const TxtData = [
  {
    title: "제목1",
    desc: "부제목",
    desc2:"하고싶은 말..."
  },
  {
    title: "제목2",
    desc: "부제목",
    desc2:"하고싶은 말..."
  },
  {
    title: "제목3",
    desc: "부제목",
    desc2:"하고싶은 말..."
  },
  {
    title: "제목4",
    desc: "부제목",
    desc2:"하고싶은 말..."
  },
  {
    title: "제목5",
    desc: "부제목",
    desc2:"하고싶은 말..."
  },

]

const StyleSlide = styled(SwiperSlide)`
  position: relative;
  img{width: 100%; height: auto;}
`
const DescContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform:  translate(-50%, -50%);
  h3{
    text-align: center;
    color: #fff;
    font-size: 30px;
    @media screen and (max-width: 768px){
      font-size: 16px;
    }
    @media screen and (min-width: 1280px){
      font-size: 48px;
    }
  }
  p{
    font-size: 24px;
    text-align: center; font-weight: bold;
    color: #fff;
    @media screen and (max-width: 768px){
      font-size: 14px;
    }
    @media screen and (max-width: 1280px){
      font-size: 20px;
    }
  }
`

function Banner() {

  useEffect(()=>{
    new WOW.WOW({
      boxClass: "wow",
      animateCladd: "animate__animated",
      live: false,
      mobile: true
    }).init();
  },[])

  return (
    <>
    <Swiper
      autoplay={{
        delay : 3000,
        disableOnInteraction : false
      }}
      loop={true}
      slidesPerView={1}
      navigation={{clickable: true}}
      pagination={{clickable: true}}
      modules={[Autoplay, Navigation, Pagination]}
      //onSwiper={(Swiper)=>{console.log(Swiper)}}
      onSlideChange={()=>{
        new WOW.WOW({
          live: false
        }).init();
      }} //슬라이드가 바뀔때마다 적용.
    >
    {
      TxtData.map((e,i)=>{
        return(
          <StyleSlide key={i}>
            <img src={`./images/bg${i+1}.${i === 0 ? 'png' : 'jpg'}`} alt="slide" />
            <DescContent>
              <h3 className='wow animate__fadeInDown' data-wow-duration="1s">{e.title}</h3>
              <p className='wow animate__fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">{e.desc}</p>
              <p className='wow animate__fadeInUp' data-wow-duration="1s" data-wow-delay="1s">{e.desc2}</p>
            </DescContent>
          </StyleSlide>
        )
      }) //반복문 ${i===0 ? 'png' : 'jpg'} 내 폴더 기준 1번 이미지가 png라서 i의 0번 이라면 png 아니라면 jpg이다.
    }
    </Swiper>
    </>
  )
}

export default Banner