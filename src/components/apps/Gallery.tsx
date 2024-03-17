import React,{useState,useRef,useEffect} from "react";
import styled from 'styled-components'
import WindowHeader from '../molecules/WindowHeader'
import {useWallPaper} from '../../context/WallPaperProvider'


const AppContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:flex-start;
    align-content:flex-start;
`
const Side = styled.div`
    width:13rem;
    overflow:scroll;
    height:100%;
`
const GridPhotoContainer = styled.div`
    flex: 1 0 auto;
    overflow:scroll;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:0.1rem;
`
const ImgElement = styled.div`
    background:white;
    aspect-ratio: 1; 
    position:relative;
`
const Image = styled.img`
    width:100%;
    height:100%;
    position:absolute;
    object-fit:cover;
`
const PhotoAlbumElement = styled.div`
    width:calc(100% - 0.6rem);
    &:hover{
        background:#1691F1;
        opacity:0.9;
        color:white;
    }
    padding:0.3rem;
    margin-top:0.5rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`
const SelectedPhotoContainer = styled.div`
    display:fixed;
    right:0;
    top:0;
    height:100%;
    width:calc(100% - 13rem);
`
const SelectedPhotoImgContainer = styled.div`
    width:95%;
    position:relative;
    overflow:hidden;
    height:32rem;
    margin:0 auto;
`
const SelectedPhotoImg = styled.img`
    position:absolute;
    object-fit:cover;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
`
const PhotoHeader = styled.div``
export default function App({setWindowOpen}){
    const images = ['https://i.namu.wiki/i/Y7NAscHIf-2TL6uOrBJY1D7LFK-ZJD780DROU8TSESyzqc2-U61OMwCebKFBO4FABI1uyHy0bbvSkPrwHUMnng.webp','https://i.ytimg.com/vi/jOTfBlKSQYY/sddefault.jpg?v=64b8fc39','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDhBZSqgv2b_s6BOOKJ-WmxR-p0dDaVXv2rpJqQVVYw&s','https://mblogthumb-phinf.pstatic.net/MjAxODA2MTdfNDMg/MDAxNTI5MTc0MDkzNDM0.MXryNp6Rs8n48zppnOfEr44U9DzkJiK_HL2Dmjcb0Qwg.phGa_LKcFDyXInAmqy9fxfOpGwi8sh0iPUGjOcRDxCIg.PNG.sinnam88/%EC%A7%80%EB%B8%8C%EB%A6%AC_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_%EA%B3%A0%ED%99%94%EC%A7%88__%2818%29.png?type=w800','https://mblogthumb-phinf.pstatic.net/MjAxODA2MTdfMTMx/MDAxNTI5MTc0MDkyNjMz.7BjcnrPSeW01qSozgIyfrfQRsxy8RhZdarW5S2-FvJIg.Lml0ssczXCO_KSwP5QQTvEQ1pLw-bs0Lmfr5bhdmcxAg.PNG.sinnam88/%EC%A7%80%EB%B8%8C%EB%A6%AC_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_%EA%B3%A0%ED%99%94%EC%A7%88__%2830%29.png?type=w800','https://mblogthumb-phinf.pstatic.net/MjAxODA2MTdfMTc3/MDAxNTI5MTc0MDkyMTc0.96xj5Fc_uF8refAcaXwIwtXF5uGM3Uciqn6A6SN513sg.EHdTl67p_w9ZfgZn_nEsYQMguBaAlFQE_MvC7W0xTDkg.PNG.sinnam88/%EC%A7%80%EB%B8%8C%EB%A6%AC_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_%EA%B3%A0%ED%99%94%EC%A7%88__%2839%29.png?type=w800','/images/bg.jpg']
    const album=[{id:'1',name:'졸릴때 '},{id:2,name:'뉴진스'},{id:3,name:'해피한해피한해피한해피한해피한 음악들 추언'}] 
    const [selectedPhoto,setSelectedPhoto] = useState(null) 
    const imgRef = useRef()
    const [imgState,setImgState] = useState(null) 
    const [wallpaper,setWallpaper] = useWallPaper() 
    
    useEffect((e)=>{
        if(imgRef.current){
            var width = imgRef.current.clientWidth;
            var height = imgRef.current.clientHeight;
            if(width>=height) setImgState('overW')
            else setImgState('overH')
        }
    },[selectedPhoto])
    
    return(
        <AppContainer>
            <Side>
                <WindowHeader setWindowOpen={setWindowOpen}/>
                <div style={{fontSize:'1.6rem',padding:'0.3rem',fontWeight:'700'}}>사진</div>
                {
                    album.map(e=>
                        <PhotoAlbumElement>{e.name}</PhotoAlbumElement>
                    )
                }
            </Side>
            {selectedPhoto?
            <>
                <PhotoHeader>
                    <span onClick={()=>setSelectedPhoto(null)}>&lt;</span>
                    <span onClick={()=>setWallpaper(selectedPhoto)}>배경화면으로...</span>
                </PhotoHeader>
                <SelectedPhotoContainer>
                    <SelectedPhotoImgContainer>
                        <SelectedPhotoImg style={imgState=='overW'?{width:'100%'}:{height:'100%'}} src={selectedPhoto} ref={imgRef}/>
                    </SelectedPhotoImgContainer>
                </SelectedPhotoContainer>
                </>
            :null}
            <GridPhotoContainer style={selectedPhoto?{visibility:'hidden'}:null}>
                {
                    images.map(e=>
                        <ImgElement onClick={()=>setSelectedPhoto(e)}>
                            <Image src={e}/>
                        </ImgElement>
                    )
                }
            </GridPhotoContainer>
            
        </AppContainer>
        )
}