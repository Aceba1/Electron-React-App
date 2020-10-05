import React from 'react'
import PropTypes from 'prop-types'
import GitModItem from './GitModItem'

// Should be called by a mod list provider (LOCAL, RESTAPI, SEARCH)
function GitModList(props) {
  return (
    // Use array mapping
    <div> 
      <GitModItem />
    </div>
  )
}

GitModList.propTypes = {
  
}

export default GitModList

