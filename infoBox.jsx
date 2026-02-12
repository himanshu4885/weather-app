import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({ info }) {

  const id = info.weatherId;

  let imageUrl = "";

  // Thunderstorm
  if (id >= 200 && id <= 232) {
    imageUrl = "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?q=80&w=900&auto=format&fit=crop";
  }
  // Drizzle
  else if (id >= 300 && id <= 321) {
    imageUrl = "https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=900&auto=format&fit=crop";
  }
  // Rain
  else if (id >= 500 && id <= 531) {
    imageUrl = "https://images.unsplash.com/photo-1624608488853-fe8bf6389e7c?q=80&w=900&auto=format&fit=crop";
  }
  // Snow
  else if (id >= 600 && id <= 622) {
    imageUrl = "https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=900&auto=format&fit=crop";
  }
  // Mist / Fog / Haze
  else if (id >= 701 && id <= 781) {
    imageUrl = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop";
  }
  // Clear Sky
  else if (id === 800) {
    imageUrl = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=900&auto=format&fit=crop";
  }
  // Clouds
  else if (id >= 801 && id <= 804) {
    imageUrl = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=900&auto=format&fit=crop";
  }
  // Default
  else {
    imageUrl = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=900&auto=format&fit=crop";
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={imageUrl}
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}°C</p>
              <p>Max Temp: {info.tempMax}°C</p>
              <p>
                The weather is <b>{info.weather}</b> and feels like {info.feelsLike}°C
              </p>
            </Typography>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}


