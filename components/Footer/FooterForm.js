import styled from "styled-components"
import {useState} from "react";
// import axios from "axios";

const FooterForm = () => {

	const [inputText, setInputText] = useState({
		name: "",
		email: "",
		message: ""
	})

	const [error, setError] = useState({
		name: "",
		email: "",
		message: ""
	})

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setInputText({...inputText, [name]: value})
		setError({
			name: null,
			email: null,
			message: null
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!inputText.name || !inputText.email) {
			let errors = {}
			!inputText.name && (error.name = "Обязательное поле")
			!inputText.email && (error.email = "Обязательное поле")
			setError(old => ({...old, ...errors}))
		} else {
			setInputText({
				name: "",
				email: "",
				message: ""
			})
		}
		//
		// axios.post('http://localhost:3000/api/email',{email:inputText.email})
		// 	.then(
		//
		// 		(res)=>{
		// 			alert('Send Mail To You')
		// 			// setEmail('')
		//
		// 		}
		//
		// 	).catch(
		// 	(e)=>console.log(e)
		// )
	}

	return <Wrapper>
		<form onSubmit={handleSubmit}>
			<div className="form_group">
				<div className="input">
					<input type="text " placeholder={"Your name"} name={"name"} onChange={handleChange}
					       value={inputText.name}/>
					{
						error.name && <span className="error"> Обязательное поле</span>
					}

				</div>
				<div className="input">
					<input type="email " placeholder={"your email*"} name={"email"} onChange={handleChange}
					       value={inputText.email}/>
					{
						error.email && <span className="error"> Обязательное поле</span>
					}
				</div>
				<div className="input">
					<textarea placeholder={"describe your project"} name={"message"} onChange={handleChange}
					          value={inputText.message}></textarea>

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
}

export default FooterForm

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

      input, textarea {
        width: 90%;
        border: 1px solid #FFFFFF;
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
          font-weight: 600;
          font-size: 18px;
          line-height: 18px;
          text-transform: uppercase;
          color: #FFFFFF;
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
      border: 3px solid #DF0606;
      background: #000;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #FFFFFF;
      padding: 10px;
      cursor: pointer;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 14px;
      }

      :hover {
        background: #DF0606;
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
    color: #FFFFFF;
    margin-top: 37px;
  }
`