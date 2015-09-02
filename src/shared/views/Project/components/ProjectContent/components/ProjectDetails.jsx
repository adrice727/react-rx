import React from 'react';
import Radium from 'radium';
import R from 'ramda';
import { getImageSrc } from '../../../../../services/Asset'

@Radium
export default class ProjectDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (props) {
  }

  render() {
    let project = this.props.project;
    let primaryAssetSrc = project.primaryAsset ? getImageSrc(project.primaryAsset, 's') : '';

    return (
      <div className='project-details' style={styles.container}>
        <div className='project-details-feature' style={styles.featureContainer}>
          <img src={primaryAssetSrc} style={styles.feature}/>
        </div>
      </div>
    );
  }
}

var styles = {
  container : {
    width: '726px',
    margin: '0 auto',
    backgroundColor: '#EEEEF0',
    padding: '10px'
  },
  featureContainer: {
    height: '490px',
    width: '740px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  },
  feature: {
    maxHeight: '100%',
    maxWidth: '100%'
  }
}
