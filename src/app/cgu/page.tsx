import React from 'react'

function CGUpage() {
  return (
    <div className='flex flex-col gap-4 md:px-20 px-5 py-14'>

        <h1 className='md:text-4xl text-3xl font-semibold'>Conditions Générales</h1>

        <div className='flex flex-col gap-2'>
            {/* Preambule */}
            <h2 className='md:text-2xl text-xl font-semibold'>Préambule</h2>
            <p>
                Kalipro vous simplifie la vie en vous proposant une sélection d&apos;artisans de confiance pour tous vos projets de rénovation
                et de construction à La Réunion. Grâce à notre processus de sélection, nous référençons des professionnels avec de
                bonnes recommandations afin d&apos;aider aux mieux les particuliers dans leur projet.</p>
            <p>
                En utilisant Kalipro, vous acceptez nos Conditions Générales d&apos;Utilisation qui encadrent l&apos;utilisation de notre plateforme.
                Les artisans partenaires sont également soumis à des obligations contractuelles.
                En d&apos;autres termes, vous acceptez sans réserve nos Conditions Générales d&apos;utilisation sur notre plateforme. Cela
                signifie que toute action effectuée sur Kalipro.re, qu&apos;il s&apos;agisse de rechercher un artisan, de laisser un avis ou simplement
                de naviguer sur le site, implique votre accord avec les termes et conditions énoncés dans ce document.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* definition */}
            <h2 className='md:text-2xl text-xl font-semibold'>Définition</h2>
            <p>
                Dans les présentes Conditions Générales d&apos;Utilisation, les termes suivants ont, sauf précision contraire, le sens qui leur
                est donné ci-dessous :
            </p>
            <ul className='list-disc ml-8 flex flex-col gap-2'>
                <li><span className='font-semibold'>Vous, votre, utilisateur :</span> Toute personne utilisant la plateforme Kalipro.</li>
                <li><span className='font-semibold'>Kalipro, nous, notre :</span> La société éditrice de la plateforme Kalipro.re dont le siège social est situé 98 HLM les
                manguiers, 97440 St-André, immatriculée sous le siret 934 451 147 00011.</li>
                <li><span className='font-semibold'>Plateforme Kalipro:</span> Lorsque nous utilisons les termes « plateforme » ou « site », nous faisons référence à
                l&apos;ensemble des services et fonctionnalités proposés sur Kalipro.re et ses extensions.</li>
                <li><span className='font-semibold'>Réseau Kalipro:</span> ce terme fait référence à l&apos;ensemble de nos «professionnels » référencés sur la plateforme
                dans le cadre d&apos;un « Contrat de service » conclu entre Kalipro et un professionnel au titre de son
                référencement.</li>
                <li><span className='font-semibold'>Nos services :</span> Nous employons le terme « service » pour faire référence à notre service de référencement et
                de mise en relation entre vous et les professionnels de la plateforme Kalipro.</li>
            </ul>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Engagement */}
            <h2 className='md:text-2xl text-xl font-semibold'>Engagements de l&apos;utilisateur</h2>
            <p>
                Accepter notre politique de confidentialité <br/>
                Afin d&apos;assurer notre service, nous sommes amenés à collecter certaines de vos données personnelles. Elles sont
                utilisées uniquement dans le cadre de notre service. Tout est expliqué dans notre politique de confidentialité.
            </p>
            <p>
                Suivi des mises en relation entre vous et les professionnels <br/>
                En acceptant ces CGU, et après avoir été en contact avec un professionnel, vous acceptez que Kalipro vous contacte
                par différents moyens (email, SMS, téléphone) pour recueillir votre avis sur ce professionnel ou pour vous aider à
                résoudre un éventuel conflit.   
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Redaction avis */}
            <h2 className='md:text-2xl text-xl font-semibold'>Rédaction d&apos;un avis</h2>
            <p>
                Vous êtes seul(e) responsable de avis que vous partagez ou publiez sur notre site. Ces avis doivent respecter les lois en
                vigueur et nos règles sur comment rédiger un « bon » avis.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Responsabilité de Kalipro */}
            <h2 className='md:text-2xl text-xl font-semibold'>Responsabilité de Kalipro</h2>
            <p>
                Kalipro n&apos;intervient pas dans la réalisation ou le contrôle des travaux, qui sont de la seule responsabilité du
                professionnel. Cela inclut la conformité des devis et factures, ainsi que les certifications et garanties d&apos;assurance des
                professionnels. Nous ne garantissons pas le résultat des prestations confiées au professionnel. Les utilisateurs du site
                reconnaissent être pleinement informés de cela.
            </p>
            <p>Nous nous engageons néanmoins à :</p>
            <ul className='list-disc ml-8 flex flex-col gap-2'>
                <li>Rencontrer personnellement chaque professionnel et ses chantiers avant de le référencer sur notre plateforme.</li>
                <li>Procéder à un audit basé sur les dix dernières factures du professionnel, en interrogeant ses dix derniers
                clients.</li>
                <li>Vous offrir la possibilité, et vous inviter sans distinction, à partager votre expérience par le biais de votre avis
                sur notre plateforme.</li>
                <li>Appliquer scrupuleusement nos règles en matière d&apos;évaluations.</li>
                <li>Vous informer lorsqu&apos;un professionnel que vous avez contacté n&apos;est plus référencé sur notre plateforme.</li>
                <li>Vous accompagner dans la résolution de relations conflictuelles avec l&apos;un de nos professionnels.</li>
            </ul>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Autres considerations */}
            <h2 className='md:text-2xl text-xl font-semibold'>Autres considérations importantes</h2>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Acces au service */}
            <h2 className='md:text-2xl text-xl font-semibold'>Accès au service</h2>
            <p>Kalipro se réserve le droit, à tout moment et sans préavis, de modifier, suspendre ou interrompre le service, ou certaines
            de ses fonctionnalités.</p>
            <p>De son côté, l&apos;utilisateur peut librement suspendre ou cesser l&apos;utilisation du service, sans obligation d&apos;en informer
            préalablement Kalipro.</p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* gratuite du service */}
            <h2 className='md:text-2xl text-xl font-semibold'>Gratuité du service</h2>
            <p>
                L&apos;accès à notre plateforme ainsi que son utilisation sont entièrement gratuits pour les utilisateurs. Les professionnels
                référencés s&apos;acquittent d&apos;une cotisation mensuelle fixe afin de figurer sur notre plateforme. Aucune commission n&apos;est
                perçue sur les mises en relation.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Propriété de Kalipro */}
            <h2 className='md:text-2xl text-xl font-semibold'>Propriété de Kalipro</h2>
            <p>
                Nous détenons l&apos;intégralité des droits relatifs à l&apos;ensemble des éléments présents sur notre plateforme, à l&apos;exception des
                contenus fournis par des tiers, tels que les recommandations publiés. Notre propriété englobe tous les droits relatifs au
                design, à la structure, ainsi qu&apos;à l&apos;apparence de la plateforme, y compris les logos, graphismes, et la marque déposée («
                Kalipro »). Vous vous engagez à ne pas copier, diffuser, modifier ou exploiter de quelque manière que ce soit les
                contenus de notre plateforme, ou notre marque, sans notre autorisation expresse. Cela implique que l&apos;utilisation de notre
                marque ou de tout autre contenu, y compris les recommandations publiés par d&apos;autres utilisateurs, est strictement
                interdite, sauf autorisation explicite de notre part.
            </p>
        </div>

        <div className='flex flex-col gap-2'>  
            {/* Propriété de l'utilisateur */}
            <h2 className='md:text-2xl text-xl font-semibold'>Propriété de l&apos;utilisateur</h2>
            <p>
                Vous demeurez propriétaire des recommandations que vous rédigez sur notre plateforme. Toutefois, vous consentez à
                ce que Kalipro, ainsi que le professionnel concerné, diffusent vos recommandations sur tout support de communication,
                notamment à des fins commerciales ou publicitaires.
                Si vous souhaitez supprimer vos recommandations de notre plateforme, il vous suffit d&apos;en faire la demande à l&apos;adresse
                suivante : direction@kalipro.re. Concernant leur suppression des supports de communication du professionnel, nous
                vous fournirons ses dernières coordonnées connues afin que vous puissiez formuler directement votre demande auprès
                de lui.
            </p>
            <p>
                Vous êtes propriétaire des appréciations que vous avez rédigées sur notre plateforme. Toutefois, vous acceptez que
                Kalipro et le professionnel diffusent vos appréciations sur tout support de communication, notamment à des fins
                commerciales ou publicitaires.
            </p>
            <p>Nous ne pourrons pas supprimer votre recommandation d&apos;un support déjà imprimé ou en cours d&apos;impression.</p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Informations et contenus fournis par les utilisateurs */}
            <h2 className='md:text-2xl text-xl font-semibold'>Informations et contenus fournis par les utilisateurs</h2>
            <p>
                Les informations personnelles que vous fournissez à Kalipro doivent être exactes et refléter la réalité. Vous êtes seul(e)
                responsable des conséquences de la divulgation de ces informations, que ce soit sur votre vie ou celle des autres
                utilisateurs. En partageant volontairement des informations, des données, des textes ou des contenus vous concernant
                via le service, vous acceptez de renoncer à tout recours contre Kalipro, notamment en cas d&apos;atteinte à votre réputation,
                votre vie privée ou votre honneur. En effet, vous avez donné votre consentement libre et explicite en étant sur la
                plateforme, conformément aux conditions d&apos;utilisation. Vous devez vous assurer que les informations que vous nous
                communiquez sont toujours précises, à jour et complètes. Kalipro ne peut être tenue responsable de l&apos;exactitude ou des
                conséquences des informations fournies par vous-même ou par d&apos;autres utilisateurs.
            </p>
            <p>
                La responsabilité de Kalipro ne saurait être engagée par un utilisateur qu&apos;à la condition qu&apos;une preuve certaine et
                définitive soit apportée, et établisse une faute imputable à Kalipro ou à l&apos;un de ses prestataires dans l&apos;exécution des
                obligations contractuelles de la société, ayant causé à l&apos;utilisateur un préjudice direct et avéré.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Délivrance du service */}
            <h2 className='md:text-2xl text-xl font-semibold'>Délivrance du service</h2>
            <p>
                Kalipro se réserve le droit, à tout moment et sans préavis, de modifier, suspendre ou interrompre le service, ou certaines
                de ses fonctionnalités. Sa responsabilité ne saurait être engagée de ce fait.
            </p>
            <p>
                Kalipro ne pourra donc pas être tenue responsable des dommages ou problèmes, directs ou indirects, causés par
                l&apos;utilisation, la modification, la suspension, l&apos;arrêt ou l&apos;indisponibilité partielle ou totale de la plateforme et de ses services.
                De plus, Kalipro ne sera pas responsable des problèmes liés aux systèmes informatiques, tels que des erreurs dans les
                logiciels, des problèmes de transmission de données, la sécurité des échanges, la vitesse d&apos;accès ou la présence de
                virus, cette liste n&apos;étant pas exhaustive.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Signalement */}
            <h2 className='md:text-2xl text-xl font-semibold'>Signalement</h2>
            <p>
                Selon l&apos;Article 6, alinéa 7 de la Loi n° 2004-575 du 21 juin 2004 “pour la confiance dans l&apos;économie numérique”, les
                utilisateurs peuvent nous contacter via notre formulaire, par téléphone ou tout autre moyen, pour signaler tout contenu
                abusif. Cela inclut, mais sans s&apos;y limiter, les messages faisant l&apos;apologie des crimes contre l&apos;humanité, incitant à la haine
                raciale ou impliquant de la pornographie enfantine, ainsi que d&apos;autres infractions mentionnées dans la loi du 29 juillet
                1881 sur la liberté de la presse et l&apos;article 227-23 du Code pénal. Les échanges sur la plateforme sont modérés après
                leur publication, ce qui permet de supprimer sans préavis tout message ne respectant pas les règles.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Information du consommateur */}
            <h2 className='md:text-2xl text-xl font-semibold'>Information du consommateur</h2>
            <p>
                Conformément à l&apos;article L223-2 du Code de la Consommation, si nous collectons votre numéro de téléphone, Kalipro
                vous informe que vous pouvez vous inscrire sur la liste anti-démarchage téléphonique, comme BLOCTEL. À noter que
                Kalipro ne fait aucun démarchage commercial auprès de ses utilisateurs.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Loi applicable */}
            <h2 className='md:text-2xl text-xl font-semibold'>Loi applicable</h2>
            <p>
                Toute réclamation ou contestation au service doit être transmise par écrit à l&apos;adresse suivante : Kalipro Réunion • 98 hlm
                les manguiers • 97440 St-André. Les présentes conditions sont soumises à la loi française. Tout conflit avec un
                utilisateur agissant à titre professionnel et né à l&apos;occasion de son interprétation et/ou de son exécution est de la
                compétence du Tribunal de commerce de La Réunion.
            </p>
        </div>

        {/* Règles relatives aux recommandations */}
        <h1 id="howto" className='md:text-4xl text-3xl font-semibold mt-4'>Règles relatives aux recommandations</h1>
        
        <div className='flex flex-col gap-2'>
            {/* Rediger avis */}
            <h2 className='md:text-2xl text-xl font-semibold'>Comment rédiger une recommandation utile sur notre plateforme ?</h2>
            <p>
                Partager votre avis est une excellente façon de faire connaître votre expérience avec un professionnel. <br/>
                Par &quot;expérience&quot;, on entend non seulement la réalisation complète d&apos;une prestation, mais aussi tout échange préalable,
                comme un entretien téléphonique ou une première rencontre, même en l&apos;absence de commande ou de prestation
                achevée.<br/>
                Toutefois, aucun avis concernant un &quot;travail non déclaré&quot; ne sera publié.
            </p>
            <p>Pour écrire un « bon» avis, voici quelques conseils :</p>
            <ul className='list-disc ml-8 flex flex-col gap-2'>
                <li>
                    <span className='font-semibold'>Soyez factuel :</span> Donnez des détails concrets pour aider les autres utilisateurs à se faire leur propre opinion.
                    Vous pouvez exprimer vos ressentis sur la prestation, mais évitez les attaques personnelles contre le
                    professionnel.
                </li>
                <li>
                    <span className='font-semibold'>Soyez courtois :</span> Un langage trop dur ou trop familier peut affaiblir la crédibilité de votre avis. Restez poli et
                    respectueux.
                </li>
            </ul>
            <p>
                Rappelez-vous que votre avis est public et que vous en êtes responsable. Nous vous recommandons de le signer avec
                votre nom complet, ce qui lui donnera plus de poids et de crédibilité. Si vous préférez rester anonyme, vous pouvez
                simplement utiliser vos initiales.
            </p>
            <p>
                Votre adresse e-mail et votre numéro de téléphone ne seront pas affichés sur le site Kalipro. Ils peuvent toutefois nous
                servir à vous contacter pour vérifier l&apos;authenticité de votre avis ou pour recueillir directement votre témoignage.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Vérification et modération des recommandations */}
            <h2 className='md:text-2xl text-xl font-semibold'>Vérification et modération des recommandations</h2>
            <p>Kalipro veille à l&apos;authenticité de chaque recommandation :</p>
            <ul className='list-disc ml-8 flex flex-col gap-2'>
                <li>Chaque recommandation est examiné individuellement par un membre de l&apos;équipe Kalipro.</li>
                <li>Un outil informatique est utilisé pour détecter toute tentative d&apos;usurpation d&apos;identité.</li>
                <li>Kalipro vérifie l&apos;authenticité de la facture qui est joint à la recommandation.</li>
                <li>Une recommandation peut également porter sur l&apos;approche commerciale du professionnel, même si la
                prestation n&apos;a pas été réalisée.</li>
            </ul>

            <p>
                Les recommandations sont publiés dans un délai de 72 heures, durant lequel Kalipro, ainsi que le professionnel
                concerné, procèdent aux vérifications nécessaires. Les travaux antérieures à l&apos;adhésion du Professionnel ne seront pris
                en compte seulement après validation du Professionnel.
            </p>

            <p>Kalipro s&apos;assure que chaque recommandation est rédigé avec respect et modération, c&apos;est-à-dire :</p>
            <ul className='list-disc ml-8 flex flex-col gap-2'>
                <li>Sans attaque personnelle.</li>
                <li>Sans mentionner de prix spécifiques, bien que vous puissiez évoquer votre perception du rapport qualité/prix.</li>
                <li>Se limitant uniquement au professionnel concerné par la recommandation.</li>
            </ul>
            <p>
                En cas de refus d&apos;une recommandation, l&apos;auteur est informé des motifs de ce refus et peut soumettre une nouvelle
                appréciation conforme aux règles établies.
            </p>
            <p>
                En cas de commentaire critique, Kalipro peut proposer aux deux parties de se rencontrer à nouveau pour clarifier la
                situation et, si nécessaire, convenir d&apos;une nouvelle intervention dans un esprit constructif. Seuls l&apos;avis et la réponse du
                professionnel seront publiés, aucun échange supplémentaire ou dialogue complémentaire ne sera diffusé sur le site.
            </p>
        </div>

        <div className='flex flex-col gap-2'>
            {/* Droit de reponse */}
            <h2 className='md:text-2xl text-xl font-semibold'>Droit de réponse</h2>
            <p>
                Le professionnel dispose également de la possibilité d&apos;exprimer son point de vue, qui sera publié en complément de la
                recommandation du client.
            </p>
        </div>
    </div>
  )
}

export default CGUpage