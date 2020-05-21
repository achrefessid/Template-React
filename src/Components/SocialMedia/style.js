import styled from 'styled-components'

export const SocialMedias = styled.div` 
    height: auto;
    overflow: hidden;
` 

export const Social = styled.div` 
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${ props => props.item === 1 ? '#3b5998' : ''}; /*kol background ya5olo id mté3ou 1, 2, 3. /item 3ibara 3an id*/
    background: ${ props => props.item === 2 ? '#498cbf' : ''};
    background: ${ props => props.item === 3 ? '#cc2127' : ''};
` 
/*kol wa7da ma5tha color diff. bish na3maléhom bil props. samito item. bich yi3tamid 3al jdon file 4:00*/

export const Icon = styled.i` 
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 23px;
` 

export const SocialDesc = styled.p` 
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff; 
    float: left;
` 

export const Span = styled.span` 
    display: block;
    margin-bottom: 8px
` 

export const SpanInfo = styled.span` 
    font-weight: normal
` 
