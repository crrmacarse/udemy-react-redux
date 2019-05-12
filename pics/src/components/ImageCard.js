import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { spans } = this.state;
    const { description, urls } = this.props.img;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
