import styled from 'styled-components';

const PlatterOutside = styled('div')`
  background-color: #999;
  border-radius: 50%;
  height: 617px;
  left: 19px;
  top: 10px;
  width: 617px;  
`

const PlatterInside = styled('div')`
  border-radius: 50%;
  background-color: #eee;
  height: 560px;
  width: 560px;
`
export const Platter = ({ children }) => (
  <PlatterOutside className='flex-center spin'>
    <PlatterInside className='flex-center'>
      {children}
    </PlatterInside>
  </PlatterOutside>
);