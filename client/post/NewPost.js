import React, { useState, useEffect } from 'react'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { create } from './api-post.js'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    padding: `${theme.spacing(3)}px 0px 0px`
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: theme.spacing(3),
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  cardContent: {
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0
  },
  cardHeader: {
    paddingTop: 8,
    paddingBottom: 8
  },
  photoButton: {
    height: 30,
    marginBottom: 5
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '90%'
  },
  submit: {
    margin: theme.spacing(2)
  },
  filename: {
    verticalAlign: 'super'
  }
}))

export default function NewPost(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    text: '',
    photo: '',
    error: '',
    user: {},
    category: ''
  })
  const jwt = auth.isAuthenticated()
  useEffect(() => {
    setValues({ ...values, user: auth.isAuthenticated().user })
  }, [])
  const clickPost = () => {
    let postData = new FormData()
    postData.append('text', values.text)
    postData.append('photo', values.photo)
    postData.append('category', values.category)
    create({ userId: jwt.user._id },
      { t: jwt.token }, postData)
      .then((data) => {
        if (data.error) { setValues({ ...values, error: data.error }) }
        else {
          setValues({ ...values, text: '', photo: '', category: '' })
          props.addUpdate(data)
        }
      })
  }
  const handleChange = name => event => {
    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value
    setValues({ ...values, [name]: value })
  }

  const photoURL = values.user._id ? '/api/users/photo/' + values.user._id : '/api/users/defaultphoto'
  return (<div className={classes.root}>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar src={photoURL} />
        }
        title={values.user.name}
        className={classes.cardHeader}
      />
      <CardContent className={classes.cardContent}>
        <TextField
          placeholder="Share your thoughts on product longevity and eco-friendliness..."
          multiline
          rows="3"
          value={values.text}
          onChange={handleChange('text')}
          className={classes.textField}
          margin="normal"
        />
        <input accept="image/*" onChange={handleChange('photo')} className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="secondary" className={classes.photoButton} component="span">
            <PhotoCamera />
            <FormControl>
              <InputLabel>Categories</InputLabel>
              <Select
                value={values.category}
                onChange={handleChange('category')}>
                <MenuItem value={'Electronics'}>Electronics</MenuItem>
                <MenuItem value={'Textile'}>Textile</MenuItem>
                <MenuItem value={'Furniture'}>Furniture</MenuItem>
                <MenuItem value={'Sporting Goods'}>Sporting Goods</MenuItem>
                <MenuItem value={'Decorations'}>Decorations</MenuItem>
              </Select>
            </FormControl>
          </IconButton>



        </label> <span className={classes.filename}>{values.photo ? values.photo.name : ''}</span>
        {values.error && (<Typography component="p" color="error">
          <Icon color="error" className={classes.error}>error</Icon>
          {values.error}
        </Typography>)
        }
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" disabled={values.text === ''} onClick={clickPost} className={classes.submit}>POST</Button>
      </CardActions>
    </Card>
  </div>)

}

NewPost.propTypes = {
  addUpdate: PropTypes.func.isRequired
}

