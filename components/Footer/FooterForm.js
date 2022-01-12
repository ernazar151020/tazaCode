import styled from "styled-components";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import axios from "axios";
const MySwal = withReactContent(Swal)

const FooterForm = () => {
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sweetAlert = ()=>{
    MySwal.fire({
      title: <p>Hello World</p>,
      footer: 'Copyright 2018',
      icon: 'success',
      didOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire(<p>Your message successfully sended</p>)
    })
  }


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputText({ ...inputText, [name]: value });
    setError({
      name: null,
      email: null,
      message: null,
    });
  };

const token = "5084020672:AAHybT0oNn9A1meuG3tWFbsO6yqNvTSS3Hc"
  const chat_id = -650250805

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!inputText.name || !inputText.email) {
      let errors = {};
      !inputText.name && (error.name = "Обязательное поле");
      !inputText.email && (error.email = "Обязательное поле");
      setError((old) => ({ ...old, ...errors }));
    } else {
      try{
        const data = {
          name: inputText.name,
          email: inputText.email,
          message: inputText.message
        }
        const dataText = `Name:${inputText.name} %0A Email: ${inputText.email} %0A Message: ${inputText.message}`
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${dataText}`

        await fetch(url, {
          method: 'post',
          body: JSON.stringify(data),
        });
        sweetAlert()
        setInputText({
          name:"",
          email:"",
          message:""
        })

      }
      catch(error){
      console.log(error , "<=error")
      }
    }
  };


  return (
    <Wrapper>
      <form onSubmit={handleSubmit} method={"post"}>
        <div className="form_group">
          <div className="input">
            <input
              type="text "
              placeholder={"Your name"}
              name={"name"}
              onChange={handleChange}
              value={inputText.name}
            />
            {error.name && <span className="error"> Обязательное поле</span>}
          </div>
          <div className="input">
            <input
              type="email "
              placeholder={"your email*"}
              name={"email"}
              onChange={handleChange}
              value={inputText.email}
            />
            {error.email && <span className="error"> Обязательное поле</span>}
          </div>
          <div className="input">
            <textarea
              placeholder={"describe your project"}
              name={"message"}
              onChange={handleChange}
              value={inputText.message}
            ></textarea>
          </div>
          <div className="submit_button">
            <button>Send your order</button>
          </div>
          <div className="footer_description">
            <small>copyright all rights are reserved</small>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default FooterForm;

const Wrapper = styled.div`
  width: 90%;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  //margin: 0 auto;
  .form_group {
    //width: 100%;
    .input {
      margin-bottom: 23px;

      input,
      textarea {
        width: 90%;
        border: 1px solid #ffffff;
        outline: none;
        padding: 16px 10px 10px 10px;
        color: #fff;
        background: #000;
        font-size: 18px;
        line-height: 18px;
        text-transform: uppercase;
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 14px;
          padding: 13px 7px 7px 7px;
        }

        ::placeholder {
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
          text-transform: uppercase;
          color: #ffffff;
          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 14px;
          }
        }
      }

      .error {
        color: red;
        margin-top: 10px;
      }

      textarea {
        height: 230px;
        resize: none;
        @media (max-width: 768px) {
          height: 180px;
        }
      }
    }
  }

  .submit_button {
    text-align: end;
    width: 90%;

    button {
      border: 3px solid #df0606;
      background: #000;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      text-transform: uppercase;
      color: #ffffff;
      padding: 10px;
      cursor: pointer;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 14px;
      }

      :hover {
        background: #df0606;
        //color: #000;
      }
    }
  }

  .footer_description {
    width: 90%;
    text-align: end;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 37px;
  }
`;
