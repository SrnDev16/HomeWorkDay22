import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type MyCardProps = {
  url: string;
  price: string;
};

const MyCard = ({ url, price }: MyCardProps) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={url}
          // image="/src/assets/images/cat2.webp"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <div className="card-footer">
            <div>
              <Button
                className="btn-card"
                onClick={() => (window.location.href = "/detail")}
              >
                View
              </Button>
              <Button
                className="btn-card"
                onClick={() => (window.location.href = "/check_out")}
              >
                Buy
              </Button>
            </div>
            <p id="price">$ {price}</p>
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default MyCard;
