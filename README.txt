BON APPETIT - GUIDE (gratuit)

A. METTRE LE PROJET SUR GITHUB (une seule fois)
1. Compte gratuit sur github.com. Nouveau depot PUBLIC nomme bon-appetit.
2. Envoyer tous les fichiers de ce dossier (y compris le dossier cache .github) : "Add file" > "Upload files".
3. Cle de signature : Settings > Secrets and variables > Actions > New repository secret. Nom : KEYSTORE_B64. Valeur : tout le texte du fichier keystore-SECRET.txt. (Ne jamais envoyer ce fichier dans le depot. Garde-en une copie : sans elle, les mises a jour ne s'installeront plus sur l'ancienne app.)
4. Pour iPhone/navigateur : Settings > Pages > Source = "GitHub Actions".

B. ANDROID (APK)
Actions > "Build APK (Android)" > Run workflow. Apres ~10 min, telecharger BonAppetit-APK (zip), extraire app-debug.apk, partager par Xender/Bluetooth. Autoriser "sources inconnues". Au 1er lancement : notifications + "Alarmes et rappels" + batterie "Sans restriction".

C. IPHONE
Actions > "Web app" > Run workflow. Le lien (https://TON-NOM.github.io/bon-appetit/) apparait dans Settings > Pages. Ouvrir dans Safari > Partager > "Sur l'ecran d'accueil".

D. FIREBASE (chat, mur de priere, actualites pour tout le monde)
1. console.firebase.google.com > Ajouter un projet (sans Analytics).
2. Build > Authentication > Commencer > Anonyme > Activer.
3. Build > Firestore Database > Creer > mode production > region proche.
4. Firestore > onglet Regles > coller le contenu de firestore.rules > Publier.
5. Parametres du projet (roue) > Vos applications > icone web </> > Enregistrer > copier firebaseConfig.
6. Dans GitHub, ouvrir www/firebase-config.js, remplacer null par { ...firebaseConfig... }, Commit. Les workflows se relancent seuls.

E. METTRE A JOUR L'APP
Remplacer www/index.html (demande-moi le nouveau fichier) puis commit : l'APK et le site se reconstruisent. Pour l'APK, relancer "Build APK" si besoin.
Textes de la Bible : King James (domaine public) et Bible de l'Epee, depuis github.com/thiagobodruk/bible.
