import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
iframe{
    display:none !important;
}
    :root{
        font-size:10px;
        font-family: 'Orbitron', san-serif ;
    }
    *{
        box-sizing:border-box
    }
    img{
        width:100%;
        object-fit:contain;
        object-position:contain
    }

    main{
        flex:1;
   
        padding-top:60px;
        
    }
	body{

		margin: 0;
		font-family: 'Orbitron', san-serif ;
        --err-color:#ee8181;
        --pri-color:#0071eb;  
        --txt-color: #7a7978;
        
	}
    .big-H{
        font-size:2.5rem;
    }
    .txt-ctr{
        text-align:center;
    }
    .pri-col{
        color:var(--pri-color)
    }
    .logo{
        color:var(--pri-color)
    }

	.hand{
      :hover{
          cursor:pointer
      }
    }
`;

export default GlobalStyle;
