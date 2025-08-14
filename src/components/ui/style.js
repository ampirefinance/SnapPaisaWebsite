import styled from "styled-components";


export const InputWrapper = styled.div`

width: 100%;
flex: 1 1 50%;
font-family: "Lato", sans-serif;
  .inputField{
   
position: relative;

.icon{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

label{
    text-align: left;
    font-size: 13px;
    font-weight: 600;
letter-spacing: 0px;
color: #000000;
    display: block;
    text-align: start;
    position: absolute;
    top: 0%;
    transform: translateY(-50%);
    left: 10px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    padding: 0 4px;
    z-index: 1;
}
.react-datepicker-wrapper{
  width: 100%;
}
input,
select{
  
    font-size: 13px;
    font-weight: 500;
    height: 50px;
    border: none;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 2px #00000017;
/* border: 1px solid #E1E1E1; */
border-radius: 5px;
    outline: 1px solid #E1E1E1;
    padding: 21px 16px 14px;
    &:focus{
        border: none;
        outline: 1px solid #E1E1E1;
        background-color: none;
    }
    &:focus-visible{
        border: none;
    }
}
&.focus{
    /* border: 1px solid #1A4F43; */
}
.toggel{
    position: absolute;
    right: 10px;
    bottom: 10px;
}
  }
  .error{
    color: #FF0000;
    background-color: #FFE9E9;
    padding: 4px 10px;
    border-radius: 5px;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 600;

    width: 100%;
  }
`


export const RadioButtonConfirmWrapper = styled.div`
margin-bottom: 20px;
.container {
  display: block;
  position: relative;
  padding-left: 35px;

  cursor: pointer;
  font-size: 10px;
  user-select: none;
  p{
    font-size: 10px;
    line-height: 14px;
    margin-bottom: 0!important;
  }
  input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
}




.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;
}


.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}


.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}


  .error{
    color: #FF0000;
    background-color: #FFE9E9;
    padding: 4px 10px;
    border-radius: 5px;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 600;

    width: 100%;
  }

`

export const ButtonWrapper = styled.button`
background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
border-radius: 12px;
font-size: 1rem;
color: #FFFFFF;
height: 48px;
padding: 0 2rem;
width: 100%;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
border: 2px solid #FF6B35;
white-space: nowrap;
font-weight: 700;
box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
position: relative;
overflow: hidden;

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

&:hover {
  background: linear-gradient(135deg, #ff8c42 0%, #FF6B35 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
  border-color: #ff8c42;
}

&:hover::before {
  left: 100%;
}

&:disabled {
  opacity: 0.6;
        cursor: not-allowed;
  
  &:hover {
    background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
    transform: none;
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
    }
}

.loader {
    width: 24px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid #FFFFFF;
    margin-inline: auto;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes l20-1{
     0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
     12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
     25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
     50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
     62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
     75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
     100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
  }
  @keyframes l20-2{ 
    0%    {transform:scaleY(1)  rotate(0deg)}
    49.99%{transform:scaleY(1)  rotate(135deg)}
    50%   {transform:scaleY(-1) rotate(0deg)}
    100%  {transform:scaleY(-1) rotate(-135deg)}
  }
  &.selfyButton{
    background: transparent;
    max-width: 300px;
    gap: 4px;
    height: 50px;
    span{
      color:#000080;
    }
  }

  @media only screen and (max-width: 768px){
    font-size: 0.9rem;
    height: 44px;
    padding: 0 1.5rem;
    .loader{
        width: 20px;
    }
  }
`

export const AlertWrapper = styled.div`
    padding: 10px 25px;
    position: fixed;
    border: 1px solid transparent;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    z-index: 99999;
    top: 130px; /* Position the alert at the top */
    opacity: 1; /* Start fully visible */
    transition: opacity 0.1s ease;

    /* Error style */
    &.error {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    }

    /* Success style */
    &.success {
        color: #303130;
        background-color: #aef7ae;
        border-color: #d6e9c6;
    }

    /* Global style for alerts */
    &.globle {
        max-width: 70%;
        min-width: 300px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        margin-left: auto;
        margin-right: auto;

        /* Close button inside global alerts */
        .close {
            font-size: 18px;
            position: absolute;
            top: 50%;
            right: 6px;
            transform: translateY(-50%);
        }
    }

    /* Error style with global class */
    &.error.globle {
        background-color: #fee;
        border: 1px solid #ffb8b8;
        color: #a66;
    }

    /* Success style with global class */
    &.success.globle {
        border: 1px solid #ded;
        color: #303130;
        background-color: #aef7ae;
    }

    /* Close button style */
    .close {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.6;
        filter: alpha(opacity=20);

        &:hover {
            color: #000;
            text-decoration: none;
            cursor: pointer;
            opacity: 0.5;
            filter: alpha(opacity=50);
        }
    }

    /* Animation for alert entry (if needed) */
    @keyframes mymove {
        from {
            top: 0px;
        }
        to {
            top: 50px;
        }
    }

    /* Responsive design for small screens */
    @media only screen and (max-width: 767px) {
        &.globle {
            width: calc(100% - 50px); /* Adjust width for smaller screens */
        }
    }
`;


export const RadioButtonsWrapper = styled.div`
&.margin-25{
  margin-top: -25px;
}
.box {
  gap: 20px;
}
.label{
  font-size: 15px;
  color: #082654;
  margin-bottom: 10px;
  font-weight: 600;
 


}
.error{
    color: #FF0000;
    background-color: #FFE9E9;
    padding: 4px 10px;
    border-radius: 5px;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 600;
    width: 100%;
  }

`;
export const RadioButtonWrapp = styled.label`

background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 2px #00000017;
border: 1px solid #E1E1E1;
border-radius: 5px;
height: 50px;
display: flex;
align-items: center;
padding-inline: 10px;
gap: 4px;
overflow: hidden;
position: relative;
cursor: pointer;
width: 100%;
&.focus,
&:hover{
  border: 1px solid #0063B9;
}
input{
   opacity: 0;
  visibility: hidden;
  position: absolute;
  left: -40px; 
  &:checked{
    &+svg{
      #Ellipse_24{
        fill:#5CB85C;
      }
      
    }
  }
}
span{
  font-size: 15px;
  font-weight: 600;
  color: #000;
}
`