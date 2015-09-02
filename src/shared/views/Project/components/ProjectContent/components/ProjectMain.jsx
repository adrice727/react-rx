import React from 'react';
import Radium from 'radium';
import R from 'ramda';
import { getImageSrc } from '../../../../../services/Asset'

@Radium
export default class ProjectMain extends React.Component {

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
        <div className='project-details-description' style={styles.descriptionContainer}>
          <div className='project-details-description-header' style={styles.descriptionHeader}>
            Project Description
          </div>
          <div className='project-details-description-header' style={styles.descriptionText}>
            {project.description}
          </div>
        </div>

      </div>
    );
  }
}

var styles = {
  container : {
    width: '726px',
    backgroundColor: '#EEEEF0',
    marginRight: '10px',
    padding: '10px'
  },
  featureContainer: {
    height: '490px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  feature: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  descriptionContainer: {
    marginTop: '20px'
  },
  descriptionHeader: {
    fontFamily: 'Roboto, serif',
    fontSize: '11px',
    color: '#B0B1B5',
    textTransform: 'uppercase',
    paddingBottom: '5px',
    borderBottom: 'solid 1px #CFCFCF'
  },
  descriptionText: {
    color: '#818287',
    fontSize: '12px',
    padding: '8px 0'
  }
}
