import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Menu, Card, Typography, Spin, Rate} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

import { getResaurants } from '../redux/actions/actions';
import { LOADING } from '../constant';
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography

class Reman extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    componentDidMount(){
        this.props.getResaurants()
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render () {
        console.log('restaurant', this.props.restaurant);
        const { restaurant, restaurantStatus } = this.props;
        return(
            <div>
                <Layout className="layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                            })}
                            <Title label={4} style={{color: '#fff', margin: 0}}>Restaurant List</Title>
                        </div>
                    </Header>
                    <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                <UserOutlined />
                                <span>nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                <VideoCameraOutlined />
                                <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                <UploadOutlined />
                                <span>nav 3</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content className="body-container vertical_scroll">
                            <div className="site-layout-content">
                                <div className="site-card-border-less-wrapper">
                                    <Row justify="center" align="middle">
                                        {restaurant && restaurant.map( data => 
                                            <Col  
                                                xs={{ span: 24}} 
                                                sm={{ span: 12}} 
                                                md={{ span: 8}} 
                                                lg={{ span: 6}}
                                                flex={1}>
                                                <Card 
                                                    bordered={false} 
                                                    hoverable={true}
                                                    loading={restaurantStatus === LOADING ? true : false}
                                                    style={{ width: '90%', height: 250, margin: '5% auto' }}>
                                                        <div>
                                                            <div>
                                                                <Text strong>Brand:- </Text>
                                                                <Text>{data.Brand}</Text>
                                                            </div>
                                                            <div>
                                                                <Text strong>Style:- </Text>
                                                                <Text>{data.Style}</Text>
                                                            </div>
                                                            <div>
                                                                <Text strong>Variety:- </Text>
                                                                <Text>{data.Variety}</Text>
                                                            </div>
                                                            <div>
                                                                <Text strong>Country:- </Text>
                                                                <Text>{data.Country}</Text>
                                                            </div>
                                                            <div>
                                                                <Text strong>Rating:- </Text>
                                                                <Rate value={data.Stars} count={5} disabled={true}/>
                                                            </div>
                                                            <div>
                                                                <Text strong>Top Ten:- </Text>
                                                                <Text>{data.Top_Ten}</Text>
                                                            </div>
                                                        </div>
                                                </Card>
                                            </Col>
                                        )}
                                        {!restaurant && 
                                        <Col Span={24}>
                                            <div className="example" style={{minHeight: 500, textAlign: 'center', alignItems: 'middle'}}>
                                                <Spin />
                                            </div>
                                        </Col>
                                        }
                                    </Row>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                    
                </Layout>
            </div>
        )

        
    }
}

const mapDispatchToProps = {
    getResaurants,
};

function mapStateToProps(state){
    const { 
        restaurant,
        restaurantStatus,
    } = state.remanState;
    return {
        restaurant,
        restaurantStatus,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reman);
