import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';


class ResModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      text: this.props.text
  };
  
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <div onClick={this.showModal} style={{cursor:'pointer'}}>
          {this.state.text}
        </div>
        <Modal
          visible={visible}
          title="Resume (updated 12/19/2021)"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          animation={false}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
        <object data="/Sandra_Soto_Resume.pdf" type="application/pdf" aria-label="resume download"/>
        </Modal>
      </div>
    );
  }
}

export default ResModal;