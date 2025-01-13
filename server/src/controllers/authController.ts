import { Request, Response } from "express";
// Регистрация (register)
// Логин (login)
// Логаут (logout)
// Сброс пароля (resetPassword)
// Проверка токена (verifyToken)

export const register = async (req: Request, res: Response) => {
    try {
        const { email, username, password, firstName, lastName, gender, dateOfBirth } = req.body;
console.log("111");

        console.log(req.body);
        
    //   const { email, username, password, firstName, lastName, gender, dateOfBirth } = req.body;
  
    //   // Проверка уникальности
    //   const existingUser = await UserModel.findOne({ email });
    //   if (existingUser) {
    //     return res.status(400).json({ message: "Email уже зарегистрирован" });
    //   }
  
    //   // Создание пользователя
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const user = await UserModel.create({
    //     email,
    //     username,
    //     profile: { firstName, lastName, gender, dateOfBirth },
    //   });
  
    //   // Сохранение хэша пароля
    //   await AuthModel.create({
    //     userId: user._id,
    //     passwordHash: hashedPassword,
    //   });
  
      res.status(201).json({ message: "User registered" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };