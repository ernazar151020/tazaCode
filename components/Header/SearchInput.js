import styled from "styled-components";
import SearchIcon from "../../assets/search-icon.svg";
import Image from "next/image";

const SearchInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <input type="text" placeholder={"Search"} />
          <div className="searchIcon">
            <Image src={SearchIcon} alt="" priority={true} />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  .form_group {
    position: relative;
  }

  input {
    border: 2px solid #df0606;
    padding: 10px;
    outline: none;
    background: #000;
    color: #df0606;
    font-size: 16px;
    text-transform: uppercase;

    ::placeholder {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #df0606;
    }
  }

  .searchIcon {
    position: absolute;
    right: 0;
    right: 5%;
    top: 30%;
  }
`;
