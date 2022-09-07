import React from 'react'
import { Button, Col, Form, Input, Row, TimePicker } from 'antd'
import moment from "moment";
export const DoctorForm = ({onFinish,initialValues}) => {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{
        ...initialValues,
        ...(initialValues && {
          timings: [
            moment(initialValues?.timings[0], "HH:mm"),
            moment(initialValues?.timings[1], "HH:mm"),
          ],
        }),
      }}>
        <h1 className="card-title mt-3"> Personal Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="first Name"
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input placeholder="FirstName" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input placeholder="lastName" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="phoneNumber" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="WebSite"
              name="website"
              rules={[{ required: true }]}
            >
              <Input placeholder="website" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Address"
              name="address"
              rules={[{ required: true }]}
            >
              <Input placeholder="address" />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <h1 className="card-title mt-3"> Professional Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Specialization "
              name="specialization"
              rules={[{ required: true }]}
            >
              <Input placeholder="specialization" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Experience"
              name="experience"
              rules={[{ required: true }]}
            >
              <Input placeholder="experience" type="number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Fee per Visit"
              name="feePerCunsultation"
              rules={[{ required: true }]}
            >
              <Input placeholder="feePerCunsultation" type="number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Timings"
              name="timings"
              rules={[{ required: true }]}
            >
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="primary-button" htmlType="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
  )
}
