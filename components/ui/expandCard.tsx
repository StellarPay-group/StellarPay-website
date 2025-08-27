"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

type ExpandCardProps = {
          name: string,
          position: string,
          image?: string,
          defaultOpen?: boolean;
          onOpen: () => void;
        };

export function ExpandCard({ name, position, image, defaultOpen = false, onOpen }: ExpandCardProps) {
          return (
            <motion.div 
            onClick={() => onOpen()}
            layout
            className={`h-[300px] md:h-[425px] rounded-2xl p-6 md:p-8 cursor-pointer`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
                    width: defaultOpen ? 400 : 250,
                    backgroundColor: defaultOpen ? '#e5e7eb' : '#b8bcbc'
            }}
          >
           { defaultOpen &&  <p className="text-[#1b6ce8] text-sm md:text-base font-semibold leading-relaxed text-left mb-2">{position}</p> }
           { defaultOpen &&  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#0e0f0c] mb-3 md:mb-4 text-left">{name}</h3>  }
          </motion.div>
          );
}