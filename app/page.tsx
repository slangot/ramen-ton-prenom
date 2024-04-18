"use client"
import { useState } from "react";
import Image from "next/image";

// Types
import { firstnameProps, firstnameCardProps } from '@/types'

// Firstname lists
import {
  firstnameListCompoundNoun,
  firstnameListA,
  firstnameListB,
  firstnameListC,
  firstnameListD,
  firstnameListE,
  firstnameListF,
  firstnameListG,
  firstnameListH,
  firstnameListI,
  firstnameListJ,
  firstnameListK,
  firstnameListL,
  firstnameListM,
  firstnameListN,
  firstnameListO,
  firstnameListP,
  firstnameListQ,
  firstnameListR,
  firstnameListS,
  firstnameListT,
  firstnameListU,
  firstnameListV,
  firstnameListW,
  firstnameListX,
  firstnameListY,
  firstnameListZ,

} from "@/constants";

// Components
import { FirstnameCard } from "@/components";

// Photo de Audrey Mari: https://www.pexels.com/fr-fr/photo/photo-de-lanternes-japonaises-3421920/
{/* <a href="https://www.freepik.com/free-vector/vector-seamless-metallic-abstract-pattern-background-illustration-horizontally-repeatable_33618427.htm#fromView=search&page=7&position=11&uuid=534bd807-1281-422f-9a96-9fd6fda2e7a2">Image by callmetak</a> on Freepik */ }

export default function Home() {

  const [detailedFirstname, setDetailedFirstname] = useState<firstnameCardProps | undefined>(undefined)
  const [firstNameInput, setFirstNameInput] = useState<string>('')

  const getJapaneseTranslation = () => {
    const formatedFirstName = firstNameInput.toLowerCase().replace('é', 'e').replace('è', 'e').replace('ê', 'e').replace('à', 'a').replace('â', 'a').replace('î', 'i').replace('ï', 'i').replace('ô', 'o').replace('û', 'u').replace('ù', 'u').replace('ç', 'c');
    const firstLetter = formatedFirstName.charAt(0);
    const isCompoundNoun = formatedFirstName.includes('-') || formatedFirstName.includes(' ');

    let selectedList: firstnameProps[] = []
    if (isCompoundNoun) {
      selectedList = firstnameListCompoundNoun;
    } else {
      switch (firstLetter) {
        case 'a':
          selectedList = firstnameListA;
          break;
        case 'b':
          selectedList = firstnameListB;
          break;
        case 'c':
          selectedList = firstnameListC;
          break;
        case 'd':
          selectedList = firstnameListD;
          break;
        case 'e':
          selectedList = firstnameListE;
          break;
        case 'f':
          selectedList = firstnameListF;
          break;
        case 'g':
          selectedList = firstnameListG;
          break;
        case 'h':
          selectedList = firstnameListH;
          break;
        case 'i':
          selectedList = firstnameListI;
          break;
        case 'j':
          selectedList = firstnameListJ;
          break;
        case 'k':
          selectedList = firstnameListK;
          break;
        case 'l':
          selectedList = firstnameListL;
          break;
        case 'm':
          selectedList = firstnameListM;
          break;
        case 'n':
          selectedList = firstnameListN;
          break;
        case 'o':
          selectedList = firstnameListO;
          break;
        case 'p':
          selectedList = firstnameListP;
          break;
        case 'q':
          selectedList = firstnameListQ;
          break;
        case 'r':
          selectedList = firstnameListR;
          break;
        case 's':
          selectedList = firstnameListS;
          break;
        case 't':
          selectedList = firstnameListT;
          break;
        case 'u':
          selectedList = firstnameListU;
          break;
        case 'v':
          selectedList = firstnameListV;
          break;
        case 'w':
          selectedList = firstnameListW;
          break;
        case 'x':
          selectedList = firstnameListX;
          break;
        case 'y':
          selectedList = firstnameListY;
          break;
        case 'z':
          selectedList = firstnameListZ;
          break;
        default:
          selectedList = [];
          break;
      }
    }
    const result = selectedList.find(item =>
      item.name.some(name => name.toLowerCase() === formatedFirstName.toLowerCase())
    );

    if (result) {
      setDetailedFirstname({
        translation: result.translation,
        pronunciation: result.pronunciation,
        audio: result.audio,
        isEmpty: false
      });
    } else {
      setDetailedFirstname({
        translation: null, pronunciation: null, audio: null, isEmpty: true
      })
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center w-full bg-[url('/bg-3.jpg')] bg-cover bg-center">
      <section className="flex
       flex-col 
       mx-auto 
       items-center 
       justify-between 
       w-4/5
       max-w-[700px]
       sm:w-4/5
       md:w-3/5
       lg:w-3/5
       h-4/5
       sm:h-1/2
       md:h-2/3
       lg:h-3/4
       sm:px-6
       md:px-12
       lg:px-24
       py-6
       sm:py-6
       md:py-8
       lg:py-12
       space-y-5
       bg-white
       bg-opacity-80
       rounded-lg
       shadow-lg">
        <div className="flex flex-col items-center justify-between">
          <Image
            src='/rtp-new-logo-red.png'
            alt="Ramen ton prénom"
            className="object-contain sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] mb-3"
            width={60}
            height={60}
          />
          <h1 className="text-red-500 uppercase font-bold">Ramen ton prénom</h1>
        </div>

        <FirstnameCard {...detailedFirstname} />

        <div className="flex flex-col w-full items-center">
          <input
            className='text-black min-w-[100px] max-w-[300px] w-3/4  px-3 py-2 rounded mb-5 shadow-lg'
            type="text"
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
            placeholder="Entrez votre prénom"
          />
          <button className="w-40 bg-red-500 font-bold hover:bg-red-700 rounded px-3 py-2 shadow-lg uppercase tracking-wide" onClick={() => getJapaneseTranslation()}>Traduire</button>
        </div>
      </section>
    </main>
  );
}
