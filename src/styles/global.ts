import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;

}
body{
  background: #312e38 ;
  -webkit-font-smoothing:antialiased
}
body,input,button{
  font-size:16px;
  font-family:"Roboto Slab", sans-serif
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight:500;
  color: #fff;
}
button{
  cursor:pointer;
}
`;
