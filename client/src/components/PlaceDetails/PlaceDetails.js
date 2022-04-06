import React, { useState } from "react"

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  Chip,
  CardContent,
} from "@material-ui/core"
import {
  LocationOn,
  FavoriteBorder,
  Favorite,
  FavoriteBorderOutlined,
} from "@material-ui/icons"
import { Phone } from "@material-ui/icons"
import { Rating } from "@material-ui/lab"
import { useDispatch } from "react-redux"
import useStyles from "./styles"
import { save } from "../../actions/place"

const PlaceDetails = ({ place, selected, refProp }) => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"))

  const [placeData, setPlaceData] = useState({
    name: place.name,
    awards: place.awrds,
    category: place.category,
    cuisine: place.cuisine,
    photo: place.photo,
    prize_level: place.price_level,
    ranking: place.ranking,
    rating: place.rating,
  })

  const handleSave = () => {
    dispatch(save({ ...placeData, name: user?.result?.name }))
  }

  const classes = useStyles()

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 300 }}
        image={
          place.photo
            ? place?.photo?.images?.large?.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <CardActions>
            <Button onClick={handleSave}>
              <Favorite />
            </Button>
          </CardActions>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Rating size="small" value={Number(place.rating)} readOnly />
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Rankings</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="between"
            alignItems="center"
          >
            <img src={award.images.small} alt="award.display_ name" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOn />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            {" "}
            Book a
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            {" "}
            WebSite
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
