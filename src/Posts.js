import React, { useState, useEffect } from "react";
import Post from "./presentation/component/post";
import Coolcat279 from "./assets/nft/coolcat279.png";
import Coolcat7795 from "./assets/nft/coolcat7795.png";
import MelvinProfile from "./assets/nft/phantabear1845.png";
import GurrenLagann from "./assets/gurrenlagann.png";
import Meka6242 from "./assets/nft/meka6242.png";
import Hood512 from "./assets/nft/hood512.png";
import F10Klaytn from "./assets/f10xklaytn.png";
import Doodle662 from "./assets/nft/doodle316.png";
import VaccinePassportsMap from "./assets/posts/vitalik-post.png";

import Typography from "@mui/material/Typography";

export const PostGreenSalad = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hi, I got another{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #coolcat
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      profile={Coolcat279}
      name="greensalad.eth"
      isVerified
      content={<Content />}
      image={Coolcat7795}
    />
  );
};

export const PostKryptonium = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        NO ONE CAN STOP US{" "}
        <Typography variant="body1" color="#00A0FA">
          #springcamp #nakseong #fuck
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      profile={Doodle662}
      name="kryptonium.eth"
      isVerified
      content={<Content />}
    />
  );
};

export const PostShipDuck = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Sharing my fav{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #anime{" "}
        </Typography>
        Character - who is yours?
        <Typography variant="body1" color="#00A0FA">
          #robot #gurrenlagann
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="shipduck.eth"
      isVerified
      content={<Content />}
      profile={Meka6242}
      image={GurrenLagann}
    />
  );
};

export const PostMelvin = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        <a
          href={
            "https://www.f10.global/press/startup-accelerator-f10-to-incubate-early-stage-blockchain-startups-in-singapore-with-klaytn-foundation"
          }
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body1" color="#00A0FA">
            f10.global/press/startup-...
          </Typography>
        </a>
        We are excited to announce our partnership with{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Klaytn.{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Interested startups do apply now!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #buildonklaytn #F10 #klaytncubation
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="melvin.eth"
      isVerified
      profile={MelvinProfile}
      content={<Content />}
      image={F10Klaytn}
    />
  );
};

export const PostHoodie = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hi. I'm new to{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Whoodid.{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Anyone interested on{" "}
          <Typography display="inline" variant="body1" color="#00A0FA">
            #craftbeer{" "}
          </Typography>
          ?
        </Typography>
      </Typography>
    );
  };
  return <Post name="angry squid" profile={Hood512} content={<Content />} />;
};

export const PostFactAboutWhale = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Fact of the day: Did you guys know that the blue whale is the largest
        animal that ever lived?
        <Typography variant="body1" color="#00A0FA">
          #whales{" "}
          <Typography display="inline" variant="body1" color="text.secondary">
            are just so amazing! 😍
          </Typography>
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #SecretSocietyOfWhales #Facts
        </Typography>
      </Typography>
    );
  };
  return <Post name="dolphinia" profile={Hood512} content={<Content />} />;
};

export const PostNftArt = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        This{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #NFT{" "}
          <Typography display="inline" variant="body1" color="text.secondary">
            is just dope!!! Just take my money please! 💸💸💸
          </Typography>
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #NFT{" "}
        </Typography>
      </Typography>
    );
  };
  return <Post name="dolphinia" profile={Hood512} content={<Content />} />;
};

export const PostStayStrong = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        #StayStrong guys, we will go to the moon!
        <Typography variant="body1" color="#00A0FA">
          #StayStrong #Jonbeo
        </Typography>
      </Typography>
    );
  };
  return <Post name="dolphinia" profile={Hood512} content={<Content />} />;
};

export const PostNftProjectAd = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hey folks! Check this cool{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #NFTProject{" "}
          <Typography display="inline" variant="body1" color="text.secondary">
            out!!! Too excited!!!
          </Typography>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Presale goes live in just 2 days! 🔥🔥🔥
        </Typography>
        <Typography variant="body1" color="#00A0FA" sx={{ cursor: "pointer" }}>
          www.cryptopunks2077nft.art
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #NFT #NFTProject
        </Typography>
      </Typography>
    );
  };
  return <Post name="dolphinia" profile={Hood512} content={<Content />} />;
};

export const PostVitalik = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        My favorite thing about arguments against vaccine passports is that they
        usually work even better verbatim as arguments against regular
        passports. Seriously, look at these maps. This is unfair apartheid and
        we should be resisting it more.
        <Typography variant="body1" color="#00A0FA">
          #Covid #FightVaccinePassports
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="vitalik.eth"
      isVerified
      profile={Hood512}
      content={<Content />}
      image={VaccinePassportsMap}
    />
  );
};

export const PostOhDuck = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Sharing my fav{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #anime{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          character. A must-watch every winter for me ❄️❄️❄️
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Toradora #anime #Taiga
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="ohduck.eth"
      isVerified
      profile={Hood512}
      content={<Content />}
    />
  );
};

export const PostReadyPlayerOne = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        When do you guys think{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Metaverse{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          like Ready Player One will come into reality? I am guessing in 10
          years for sure!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Metaverse #movie
        </Typography>
      </Typography>
    );
  };
  return <Post name="Oasis" profile={Hood512} content={<Content />} />;
};

export const PostSummerWars = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        If you love{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #anime{" "}
        </Typography>
        and{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Metaverse,{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          you freakin' MUST WATCH THIS MOVE!!! LOVE EVERY SECOND OF IT!!!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Metaverse #movie #SummerWars
        </Typography>
      </Typography>
    );
  };
  return <Post name="Oasis" profile={Hood512} content={<Content />} />;
};

export const PostHiringAd = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Binance is looking for a{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #frontend #developer
        </Typography>
        !{" "}
        <Typography variant="body1" color="text.secondary">
          Check the link below for more details and application!
        </Typography>
        <Typography variant="body1" color="#00A0FA" sx={{ cursor: "pointer" }}>
          www.binance.com/careers/job-id=34921
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Binance #RemoteWork #Hiring #Developer
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="binance.eth"
      isVerified
      profile={Hood512}
      content={<Content />}
    />
  );
};

export const PostDog = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        These are my Doge and Coin!
        <Typography display="inline" variant="body1" color="#00A0FA">
          #DogeCoin{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We will go to the moon together!!!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Animals #cat #kitten
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="binance.eth"
      isVerified
      profile={Hood512}
      content={<Content />}
    />
  );
};

export const PostCat = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Today's cute{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #cat{" "}
        </Typography>
          <Typography display="inline" variant="body1" color="text.secondary">
              picture - my cousin named them{" "}
          </Typography>
          <Typography display="inline" variant="body1" color="#00A0FA">
              #Shiba{" "}
          </Typography>
          and{" "}
          <Typography display="inline" variant="body1" color="#00A0FA">
              #Coin{" "}
          </Typography>
          😂😂😂
        <Typography variant="body1" color="#00A0FA">
          #Animals #cat #kitten #ShibaCoin
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="binance.eth"
      isVerified
      profile={Hood512}
      content={<Content />}
    />
  );
};

export const PostAespa = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hello fellow MY! Where can I get{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Aespa{" "}
        </Typography>
        goods?{" "}
        <Typography variant="body1" color="#00A0FA">
          #Kpop #Aespa
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="winter_next_level"
      isVerified
      profile={Hood512}
      content={<Content />}
    />
  );
};

export const PostCoinQuestion = () => {
    const Content = () => {
        return (
            <Typography variant="body1" color="text.secondary">
                anyone heard of{" "}
                <Typography display="inline" variant="body1" color="#00A0FA">
                    #KimchiCoin
                </Typography>
                ?{" "}
                <Typography variant="body1" color="text.secondary">
                    worth investing or just another shit coin?
                </Typography>
                <Typography variant="body1" color="#00A0FA">
                    #KimchiCoin #Investment
                </Typography>
            </Typography>
        );
    };
    return (
        <Post
            name="binance.eth"
            isVerified
            profile={Hood512}
            content={<Content />}
        />
    );
};

export const PostGodOfWar = () => {
    const Content = () => {
        return (
            <Typography variant="body1" color="text.secondary">
                Damn!!!{" "}
                <Typography display="inline" variant="body1" color="#00A0FA">
                    #GodOfWar{" "}
                </Typography>
                finally available for PC!!!{" "}
                <Typography variant="body1" color="text.secondary">
                    LOVE YOU KRATOS!!!
                </Typography>
                <Typography variant="body1" color="#00A0FA">
                    #Game #GodOfWar
                </Typography>
            </Typography>
        );
    };
    return (
        <Post
            name="binance.eth"
            isVerified
            profile={Hood512}
            content={<Content />}
        />
    );
};

export const PostTeen = () => {
    const Content = () => {
        return (
            <Typography variant="body1" color="text.secondary">
                too much homework. fml.{" "}
                <Typography variant="body1" color="#00A0FA">
                    #SchoolLife #fml
                </Typography>
            </Typography>
        );
    };
    return (
        <Post
            name="binance.eth"
            isVerified
            profile={Hood512}
            content={<Content />}
        />
    );
};