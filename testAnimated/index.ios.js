/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native')
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Navigator,
  TouchableOpacity,
  ListView,
  Switch,
  ScrollView,
  TouchableHighlight
}= React;

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
 class SampleComponent extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.HorizontalSwipeFloatFromTop;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
} 
class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false  }
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push(route_sarck[1])
        }
    }
    _pressButton3() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push(route_sarck[2])
        }
    }
    _pessToButton(){
      const { navigator } = this.props;
      if(navigator) {
        navigator.jumpTo(route_sarck[1]
             );
      }
    }
    _pessForward(){
      const { navigator } = this.props;
      if(navigator) {
        navigator.jumpForward();
      }
    }
    render() {
       console.log(this.state)
        return (
          <View style={{flexDirection:'column',flex:1}}>
            <View style={{marginTop:20,height:40,flexDirection:'row',justifyContent:'space-between'}}>
                <NavButton text='#2' onPress={this._pressButton.bind(this)}></NavButton>
                <NavButton text='#1'></NavButton>
                <NavButton onPress={this._pressButton3.bind(this)} text='#3'>
                </NavButton>
            </View>
            <ScrollView style={{flex:1}}>
                <NavButton text='push()#2' onPress={this._pressButton.bind(this)}/>
                <NavButton text='jumpTo() #2' onPress={this._pessToButton.bind(this)}/>
                <NavButton text='jumpForward()' onPress={this._pessForward.bind(this)}/>
                <View style={styles.rowView}>
                  <Text style={styles.navBarText}>按鈕</Text>
                  <Switch onValueChange={(value) => this.setState({falseSwitchIsOn: value})} value={this.state.falseSwitchIsOn}/>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.navBarText}>綁定的按鈕1</Text>
                  <Switch onValueChange={(value) => this.setState({trueSwitchIsOn: value})} value={this.state.trueSwitchIsOn}/>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.navBarText}>綁定的按鈕2</Text>
                  <Switch onValueChange={(value) => this.setState({trueSwitchIsOn: value})} value={this.state.trueSwitchIsOn}/>
                </View>
            </ScrollView>
          </View>
        )
        ;
    }
}
class SecondPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            
            navigator.jumpBack();
        }
    }
    _pressButton2() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
    return (
            <View style={{marginTop:20}}>
                <NavButton onPress={this._pressButton.bind(this)} text='jumpBack()'>
                </NavButton>
                <NavButton onPress={this._pressButton2.bind(this)} text='pop()'>
                </NavButton>                
            </View>
    );
    }
}
class ThirdPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.jumpBack();
        }
    }

    render() {
    return (
            <View style={{backgroundColor:'#999',marginTop:20}}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>jumpBack()</Text>
                </TouchableOpacity>
            </View>
    );
    }
}
var route_sarck=[ {name: 'FirstPageComponent',
                component: FirstPageComponent,
                sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            },
            {
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
            },
            {
                name: 'ThirdPageComponent',
                component: ThirdPageComponent,
                sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            }];

var styles = StyleSheet.create({
  rowView:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
  },

});
AppRegistry.registerComponent('testAnimated', () => SampleComponent);