import React from 'react';
import { Tag } from 'antd';

    const tags = {
        asp: {color: "orange", text: "ASP.NET"},
        android: {color: "green", text: "Android Studio"},
        authorize: {color: "default", text: "Authorize API"},
        bootstrap: {color: "purple", text: "Bootstrap"},
        cpp: {color: "geekblue", text: "C++"},
        csharp: {color: "purple", text: "C#"},
        d3: {color:"orange", text: "d3.js"},
        flask: {color: "default", text: "Flask"},
        handlebars: {color: "orange", text: "Handlebars.js"},
        html: {color: "purple", text: "HTML & CSS"},
        java: {color: "orange", text: "Java"},
        javascript: {color: "cyan", text: "JavaScript"},
        jquery: {color: "blue", text: "jQuery"},
        mongodb: {color: "green", text: "MongoDB"},
        nltk: {color: "blue", text: "NLTK"},
        node: {color: "cyan", text: "Node.js"},
        parse: {color: "blue",  text: "ParseDB"},
        paypal: {color: "blue", text: "PayPal API"},
        python: {color:"blue", text: "Python"},
        socketio: {color: "default", text: "Socket.io"},
        spotify: {color: "green", text: "Spotify API"},
        sql: {color: "blue", text: "MySQL"},
        unity: {color: "default", text: "Unity"},
        wordpress: {color: "blue", text: "WordPress"},
        woocommerce: {color: "purple", text: "WooCommerce"}

};

class CustomTag extends React.Component {
  render() {
    return <Tag color={tags[this.props.type].color}> {tags[this.props.type].text}</Tag>;
  }
}

export default CustomTag;