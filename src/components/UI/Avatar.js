import styled from "@emotion/styled"

export default function Avatar({url="https://i0.wp.com/flejedecosas.com/wp-content/uploads/perfil-de-usuario-google-chrome-vacio.jpg?ssl=1"}){
    return(
      <StyledAvatar url = {url} />
    )
}

const StyledAvatar = styled.div`
  width:45px;
  height:45px;
  border-radius:50%;
  border:none;
  background-image:url(${(props)=>props.url});
  background-size:100% 100%;
`
