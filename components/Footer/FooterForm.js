import styled from "styled-components"

const FooterForm = () => {

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return <Wrapper>
		<form onSubmit={handleSubmit}>
			<div className="form_group">
				<div className="input">
					<input type="text " placeholder={"Your name"}/>
				</div>
				<div className="input">
					<input type="email " required placeholder={"your email*"}/>
				</div>
				<div className="input">
					<textarea placeholder={"describe your project"}></textarea>
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
  @media(max-width: 768px){
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
        @media(max-width: 768px){
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
          @media(max-width: 768px){
            font-size: 14px;
            line-height: 14px;
          }
        }
      }

      textarea {
        height: 230px;
        resize: none;
        @media(max-width: 768px){
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
      @media(max-width: 768px){
        font-size: 14px;
        line-height: 14px;
      }

      :hover {
        background: #DF0606;
        //color: #000;
      }
    }

  }
  .footer_description{
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