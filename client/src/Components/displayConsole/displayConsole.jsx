import React,{useState} from 'react';
import { Display } from './displayConsole.style'
import { connect } from "react-redux";

 const DisplayConsole = ({ allCapsules,isFetching,errorMessage}) => {


    return(
        <Display>
              <>{isFetching ? <h5>Loading data...</h5> : null}</>
              <>{errorMessage ? <h5>{errorMessage}</h5> : null}</>
                {JSON.stringify(allCapsules, null, 1)}
        </Display>
    )
 }
    
const mapStateToProps = state => ({
    allCapsules: state
});



export default connect(mapStateToProps)(DisplayConsole);