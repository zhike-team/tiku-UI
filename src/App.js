import React, { Component } from 'react';
import { Button, Input, Textarea } from './ui'
import styles from './styles';
import './App.css';

class App extends Component {
  onClick = () => {
    alert('click action')
  }

  render() {
    return (
      <div>

        <header>
          <h1>智课题库组 UI 组件</h1>
        </header>

        <content>
          <h2>Button</h2>

          <div className="para">theme</div>
          <div className="para">
            <Button className={styles.button} text="default"></Button>
            <Button className={styles.button} text="darken" theme="darken"></Button>
            <Button className={styles.button} text="hollow" theme="hollow"></Button>
          </div>

          <div className="para">icon</div>
          <div className="para">
            <Button className={styles.button} text="leftIcon" theme="hollow" leftIcon={require('./static/correct.png')}></Button>
            <Button className={styles.button} text="rightIcon" theme="hollow" rightIcon={require('./static/correct.png')}></Button>
          </div>

          <div className="para">onClick</div>
          <div className="para">
            <Button className={styles.button} text="click" theme="hollow" onClick={this.onClick}></Button>
          </div>

          <div className="para">{'isAvailable={false}'}</div>
          <div className="para">
            <Button className={styles.button} text="default" isAvailable={false}></Button>
            <Button className={styles.button} text="darken" theme="darken" isAvailable={false}></Button>
            <Button className={styles.button} text="hollow" theme="hollow" isAvailable={false}></Button>
          </div>
        </content>

        <content>
          <h2>Input</h2>

          <div className="para">default</div>
          <div className="para">
            <Input></Input>
          </div>

          <div className="para">with placeholder</div>
          <div className="para">
            <Input placeholder="请输入答案"></Input>
          </div>
        </content>

        <content>
          <h2>Textarea</h2>

          <div className="para">default</div>
          <div className="para">
            <Textarea></Textarea>
          </div>

          <div className="para">with placeholder & muiti rows</div>
          <div className="para">
            <Textarea placeholder="请输入答案" rows={5}></Textarea>
          </div>
        </content>

      </div>
    );
  }
}

export default App;
