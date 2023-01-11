/* eslint-disable prettier/prettier */
import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import * as fs from 'fs';

export function stats(req: Request, res: Response, next: NextFunction) {
    const ido = new Date().toISOString();
    const url = req.path;
    const adat = ido + ';' + url + '\n';

    fs.appendFile('stats.csv', adat, err => {
      if (err) {
        console.log('Hiba a fajl irasakor:');
        console.log(err);
      }
    })


    next();
  }

