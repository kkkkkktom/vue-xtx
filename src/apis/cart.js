import http from '@/utils/http'
export const getCartAPI=(skuId,count)=>{
  return http({
    url:'/member/cart',
    method:'POST',
    data:{
      skuId,
      count
    }
  })
}
export const getNewCartAPI=()=>{
  return http({
    url:'/member/cart',
    method:'POST',
    data:{
      skuId,
      count
    }
  })
}
export const delCartAPI=()=>{
  return http({
    url:'/member/cart',
    method:'DELETE',
    data:{
      ids
    }
  })
}
