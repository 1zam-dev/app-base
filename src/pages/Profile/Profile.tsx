import { Card, CardContent, Typography, List, ListItemText } from "@mui/material";
import { ingredients } from "../../domain/product";
import { useUserStorage } from "../../services/storageAdapter";
import "./Profile.scss"

export function Profile() {
  const { user } = useUserStorage();
  if (!user) return null;

  return (
    <Card sx={{textAlign: 'left'}}>
      <CardContent>
        <Typography variant="h4" >{user.name}</Typography>
        <ListItemText>{user.email}</ListItemText>
        <Typography variant="h5">Allergies</Typography>
        <List >
          {user.allergies.map((ingredient) => (
            <ListItemText  key={ingredient}>{ingredients[ingredient]}</ListItemText>
          ))}
        </List>
        <Typography variant="h5">Preferences</Typography>
        <List>
          {user.preferences.map((ingredient) => (
            <ListItemText key={ingredient}>{ingredients[ingredient]}</ListItemText>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
