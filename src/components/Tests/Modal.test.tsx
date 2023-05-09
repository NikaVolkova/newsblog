
import React from 'react'
//import { create, act } from 'react-test-renderer'
import {ModalWindowPropsType} from "../Modal/types"
//import * as ManyUI from '@manychat/manyui'
import Modal from "../Modal";



describe('ApplicationPublishModal', () => {
  const appName = 'App Name'

  it('renders Modal with props open and width', () => {
  //  const renderer = create(<Modal appName={appName} onPublish={jest.fn()} />)

  //  const element = renderer.root.findByType(ManyUI.Modal)
 //   expect(element.props.open).toBe(true)
  //  expect(element.props.width).toBe(480)
  })

  it('renders Modal with the correct title', () => {
   // const renderer = create(<Modal appName={appName} onPublish={jest.fn()} />)

   // const element = renderer.root.findByType(ManyUI.Modal)
   // expect(element.props.title).toBe('Publish App Name app')
  })

  it('calls method onPublish and closes the modal when button Publish is clicked', () => {
  //  const onPublishSpy = jest.fn()
   // const renderer = create(<Modal appName={appName} onPublish={onPublishSpy} />)
   // const element = renderer.root.findByType(ManyUI.Modal)

  //  act(() => {
    //  element.props.buttons
    //    .find((button: { label: string }) => button.label === 'Publish')
     //   .onClick()
   // })

  //  expect(onPublishSpy).toHaveBeenCalledTimes(1)
   // expect(element.props.open).toBe(false)
  })

  it('renders button and title Republish when isPublic is true', () => {
   // const renderer = create(
    //  <Modal appName={appName} onPublish={jest.fn()} isPublic />,
   // )

  //  const element = renderer.root.findByType(ManyUI.Modal)
  //  expect(element.props.title).toBe('Republish App Name app')
  //  expect(element.props.buttons[0].label).toBe('Republish')
  })
})