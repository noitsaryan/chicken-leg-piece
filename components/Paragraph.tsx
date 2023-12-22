'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Paragraph: React.FC = () => {

    const content =
        'Chicken Leg Piece is a one-stop destination for food lovers who are always on the hunt for the latest and greatest food trends. Our page features engaging, entertaining and informative food content that is sure to tantalize your taste buds. From drool-worthy food videos and mouth-watering images to informative food articles, we cover everything that\'s new and exciting in the world of food.';

    return (
        <div>
            <p className={``}>{`${content.slice(0, 80)}...`}</p>
            <AlertDialog>
                <AlertDialogTrigger>Read More</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogDescription>
                            Chicken Leg Piece is a one-stop destination for food lovers who are always on the hunt for the latest and greatest food trends. Our page features engaging, entertaining and informative food content that is sure to tantalize your taste buds. From drool-worthy food videos and mouth-watering images to informative food articles, we cover everything that's new and exciting in the world of food.
<br /> <br />
                            Founded by Ulhas Kamathe, who is one of the most famous food bloggers from Mumbai, Chicken Leg Piece is dedicated to providing an authentic and relatable food experience to our followers. Ulhas' passion for food and his keen eye for detail is evident in every post, making Chicken Leg Piece a go-to source for food lovers everywhere.
<br /> <br />
                            In addition to our viral food content, we also offer in-depth restaurant reviews that help our followers make informed decisions about where to dine. Our team of food experts visit some of the best restaurants in town to bring you the latest scoop on the food scene. Whether you're looking for a new place to try or just want to know what's new in town, Chicken Leg Piece has got you covered.
                            <br /> <br />
                            So if you're a food lover looking for the latest and greatest in the food world, be sure to follow us on social media! We promise to keep you entertained, informed and always hungry for more!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
};

export default Paragraph;
