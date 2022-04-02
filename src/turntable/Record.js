import styled from 'styled-components';

const RecordDiv = styled('div')`
  background: #161617;
  border-radius: 50%;
  height: 546px;
  width: 546px;
`

const LabelDiv = styled('div')`
  background: white;
  border-radius: 50%;
  height: 200px;
  position: relative;
  width: 200px;
`

const TextDiv = styled('div')`
  position: absolute;
  top: 40px;
  color: black;
  font-size: 2rem;
  font-weight: 200;
  text-align: center;
`

const HoleDiv = styled('div')`
  background: #282c34;
  border-radius: 50%;
  height: 12px;
  width: 12px;
`

export const Record = () => (
  <RecordDiv className='flex-center'>
    <LabelDiv className='flex-center'>
      <TextDiv>Drone Sky</TextDiv>
      <HoleDiv />
    </LabelDiv>
  </RecordDiv>
);