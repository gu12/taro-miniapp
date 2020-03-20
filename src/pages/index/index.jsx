import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Picker } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtNoticebar,AtInput,AtButton } from 'taro-ui'
import SvgImg from '../../components/SvgImg/img'



import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {
  state = {
    selector: ['楼盘名称', '备案号'],
    selectorChecked: '美国',
    value:''
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
       <AtNoticebar icon='volume-plus' close={true}>注:楼盘名称需输入备案名称, 而非宣传名称</AtNoticebar>
        <SvgImg/>

        <View class="search-box">
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  {this.state.selectorChecked}
                </View>
              </Picker>
              <AtInput
                name='value'
                type='text'
                placeholder='输入要查询的备案号'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              >
              </AtInput>
              <AtButton circle className="btn-text" type="primary">搜索</AtButton>

            </View>
      </View>
    )
  }
}

export default Index 
