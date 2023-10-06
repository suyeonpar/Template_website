import React, { memo } from 'react'



const Product = memo(function(){

  //axios는 기본적으로 한번만 댕겨온다 업데이트가 안됨

  //재렌더링이 필요없을때 memo를 쓴다 (성능개선을 위해 사용)

  console.log("Product 실행")

  return (
    <>
    
    </>
  )
})

export default Product