-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-04-2026 a las 05:08:32
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lyricsdepot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `artista` varchar(50) NOT NULL,
  `albun` varchar(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `letra` text NOT NULL,
  `likes` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `titulo`, `artista`, `albun`, `fecha`, `letra`, `likes`) VALUES
(2, 'Shape of You', 'Ed Sheeran', '÷ (Divide)', '2017-01-06', '...', 11),
(3, 'Believer', 'Imagine Dragons', 'Evolve', '2017-02-01', '...', 0),
(4, 'Hello', 'Adele', '25', '2015-10-23', 'Hello from the other side...', 0),
(5, 'Hello', 'Lionel Richie', 'Can\'t Slow Down', '1984-10-01', 'Hello, is it me you\'re looking for?', 6),
(6, 'Stay', 'The Kid LAROI', 'F*CK LOVE 3', '2021-07-09', 'I do the same thing I told you that I never would...', 0),
(7, 'Stay', 'Rihanna', 'Unapologetic', '2012-01-27', 'Not really sure how to feel about it...', 0),
(8, 'Blinding Lights', 'The Weeknd', 'After Hours', '2019-11-29', 'I said, ooh, I\'m blinded by the lights...', 0),
(9, 'Let It Be', 'The Beatles', 'Let It Be', '1970-03-06', 'When I find myself in times of trouble...', 0),
(10, 'Numb', 'Linkin Park', 'Meteora', '2003-03-25', 'I\'m tired of being what you want me to be...', 0),
(11, 'Hello', 'Adele (Live at Royal Albert Hall)', 'Live Performance', '2016-11-25', 'Hello, it\'s me...', 0),
(12, 'Smells Like Teen Spirit', 'Nirvana', 'Nevermind', '1991-09-10', 'With the lights out, it\'s less dangerous...', 0),
(13, 'Hello', 'Ariana Grande', 'Dangerous Woman Sessions', '2016-05-20', 'Hello, can you hear me...', 0),
(14, 'Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '1975-10-31', 'Is this the real life? Is this just fantasy?', 0),
(15, 'Skyfall', 'Adele', 'Skyfall', '2012-10-05', 'This is the end, hold your breath and count to ten...', 0),
(16, 'bad for us', 'aidenf7', 'Bad for Us', '2026', 'Baby, see it in your eyes\nLately, 本当眠れない\nKnow that we\'re wrong\nBut you feel so right bae\nKnow that it\'s dumb\nBut I need you beside me\nWhat\'s on your mind (What\'s on your mind)\n仕方がないね\nLooking back I realize\nYou can\'t keep your story straight\nD-Didn\'t take too long\nTo see the other side yeah\nDon\'t call my bluff\nWon\'t catch me if I run\nBut this ain\'t adding up\nYou want us to last\nBut ain\'t this bad for us\nHaven\'t you had enough\nWords trapped inside my lungs\nI can\'t keep biting my tongue\nBad for us\nRunning around town bragging about how you just broke my trust\nWas it all for nothing\nWhy\'d we have to rush it\nGot me thinking that I\'m better without\nBaby, see it in your eyes\nLately, 本当眠れない\nKnow that we\'re wrong\nBut you feel so right bae\nKnow that it\'s dumb\nBut I need you beside me\nWhat\'s on your mind (What\'s on your mind)\n仕方がないね\nLooking back I realize\nYou can\'t keep your story straight\nD-Didn\'t take too long\nTo see the other side yeah\nDon\'t call my bluff\nWon\'t catch me if I run', 0),
(17, 'Bad for Us', 'aiden7', 'Bad for Us', '2024', 'Baby, see it in your eyes\nLately, 本当眠れない\nKnow that we\'re wrong\nBut you feel so right bae\nKnow that it\'s dumb\nBut I need you beside me\nWhat\'s on your mind (What\'s on your mind)\n仕方がないね\nLooking back I realize\nYou can\'t keep your story straight\nD-Didn\'t take too long\nTo see the other side yeah\nDon\'t call my bluff\nWon\'t catch me if I run\nBut this ain\'t adding up\nYou want us to last\nBut ain\'t this bad for us\nHaven\'t you had enough\nWords trapped inside my lungs\nI can\'t keep biting my tongue\nBad for us\nRunning around town bragging about how you just broke my trust\nWas it all for nothing\nWhy\'d we have to rush it\nGot me thinking that I\'m better without\nBaby, see it in your eyes\nLately, 本当眠れない\nKnow that we\'re wrong\nBut you feel so right bae\nKnow that it\'s dumb\nBut I need you beside me\nWhat\'s on your mind (What\'s on your mind)\n仕方がないね\nLooking back I realize\nYou can\'t keep your story straight\nD-Didn\'t take too long\nTo see the other side yeah\nDon\'t call my bluff\nWon\'t catch me if I run', 0),
(19, 'asda', 'sadsad', 'asdasd', '2025', '[Intro]\nAll your love got me feeling like I\'m starstudded\nThe rain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nOoh, yeah\n\n[Chorus]\nStarstudded\nThe rain pouring on my head like it should be\nTwo years gone but I still hear those cries, ooh\nMake me wanna move girl\nCan\'t you see you are my whole world\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\n\n[Refrain]\nAll your love got me feeling like I’m starstudded\nRain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nCan\'t you see you\'re my whole world, ooh, yeah\nStarstudded\nCan\'t you see you\'re my whole world, world, world, world\nThe rain ain’t pouring on my head like it should be\nCan\'t you see you\'re my whole world\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Don\'t talk, don\'t talk girl)', 0),
(20, 'fcghj', 'vhbjnkl', 'bnkl', '2005', '[Intro]\nAll your love got me feeling like I\'m starstudded\nThe rain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nOoh, yeah\n\n[Chorus]\nStarstudded\nThe rain pouring on my head like it should be\nTwo years gone but I still hear those cries, ooh\nMake me wanna move girl\nCan\'t you see you are my whole world\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\n\n[Refrain]\nAll your love got me feeling like I’m starstudded\nRain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nCan\'t you see you\'re my whole world, ooh, yeah\nStarstudded\nCan\'t you see you\'re my whole world, world, world, world\nThe rain ain’t pouring on my head like it should be\nCan\'t you see you\'re my whole world\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Don\'t talk, don\'t talk girl)', 0),
(21, 'Jane!', 'The Long Faces', 'jane', '2023', '[Intro]\nAll your love got me feeling like I\'m starstudded\nThe rain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nOoh, yeah\n\n[Chorus]\nStarstudded\nThe rain pouring on my head like it should be\nTwo years gone but I still hear those cries, ooh\nMake me wanna move girl\nCan\'t you see you are my whole world\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\n\n[Refrain]\nAll your love got me feeling like I’m starstudded\nRain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nCan\'t you see you\'re my whole world, ooh, yeah\nStarstudded\nCan\'t you see you\'re my whole world, world, world, world\nThe rain ain’t pouring on my head like it should be\nCan\'t you see you\'re my whole world\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Don\'t talk, don\'t talk girl)', 0),
(22, 'sadasd', 'sbdjkasd', 'asdsad', '2015', '[Intro]\nAll your love got me feeling like I\'m starstudded\nThe rain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nOoh, yeah\n\n[Chorus]\nStarstudded\nThe rain pouring on my head like it should be\nTwo years gone but I still hear those cries, ooh\nMake me wanna move girl\nCan\'t you see you are my whole world\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\n\n[Refrain]\nAll your love got me feeling like I’m starstudded\nRain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nCan\'t you see you\'re my whole world, ooh, yeah\nStarstudded\nCan\'t you see you\'re my whole world, world, world, world\nThe rain ain’t pouring on my head like it should be\nCan\'t you see you\'re my whole world\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Don\'t talk, don\'t talk girl)', 0),
(23, 'sssss', 'jjjjjjjj', 'lllllll', '2025', '[Intro]\nAll your love got me feeling like I\'m starstudded\nThe rain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nOoh, yeah\n\n[Chorus]\nStarstudded\nThe rain pouring on my head like it should be\nTwo years gone but I still hear those cries, ooh\nMake me wanna move girl\nCan\'t you see you are my whole world\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\n\n[Refrain]\nAll your love got me feeling like I’m starstudded\nRain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nCan\'t you see you\'re my whole world, ooh, yeah\nStarstudded\nCan\'t you see you\'re my whole world, world, world, world\nThe rain ain’t pouring on my head like it should be\nCan\'t you see you\'re my whole world\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Don\'t talk, don\'t talk girl)', 0),
(24, 'starstudded', 'Malcom Todd', 'Before Prom', '2026', '[Intro]\nAll your love got me feeling like I\'m starstudded\nThe rain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nOoh, yeah\n\n[Chorus]\nStarstudded\nThe rain pouring on my head like it should be\nTwo years gone but I still hear those cries, ooh\nMake me wanna move girl\nCan\'t you see you are my whole world\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\n\n[Refrain]\nAll your love got me feeling like I’m starstudded\nRain pouring on my head like it should be\nDiamonds instead of eyes, diamonds instead of eyes\nDiamonds instead of eyes, diamonds instead of eyes\nCan\'t you see you\'re my whole world, ooh, yeah\nStarstudded\nCan\'t you see you\'re my whole world, world, world, world\nThe rain ain’t pouring on my head like it should be\nCan\'t you see you\'re my whole world\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Oh, guess I don\'t wanna hide behind that big shine)\n(Don\'t talk, don\'t talk girl)', 0),
(25, 'asjdakjsdk', 'skjdaksdkja', 'njaskdkjahskdj', '2006', '\nconst subirImagen = async (req, res) => {\n    try {\n        const id = req.body.id_producto;\n\n        if (!req.files || req.files.length === 0) {\n            return res.status(400).send(\"No se recibieron imágenes\");\n        }\n\n        req.files.forEach(file => {//hacerlo para cada imagne\n            const rutaAntigua = file.path; \n            const ext = path.extname(file.originalname);\n\n            const nuevoNombre = `${id}-${Date.now()}-${file.originalname}`;//ahora nesesitamos usar los nombres del archivo por que todos llevan la misma date\n            const rutaNueva = path.join(\"images\", nuevoNombre);\n\n            fs.renameSync(rutaAntigua, rutaNueva);\n        });\n\n        res.status(200).send(\"Imágenes subidas correctamente\");\n\n    } catch (error) {\n        console.error(error);\n        res.status(500).send(\"Error al subir imágenes\");\n    }\n};', 0),
(26, 'hbdhshdb', 'djjdfjkshkjdshk', 'asdkajsdaskjsd', '2000', 'import { Component, inject } from \'@angular/core\';\nimport { ReactiveFormsModule, FormBuilder, Validators } from \'@angular/forms\';\nimport { Router } from \'@angular/router\';\nimport { Musica } from \'../servicios/musica\';\nimport { Cancion } from \'../models/cancion\';\nimport { Imagenes } from \'../servicios/imagenes\';\nimport Swal from \'sweetalert2\';\n\n@Component({\n  selector: \'app-subir-letra\',\n  standalone: true,\n  imports: [ReactiveFormsModule],\n  templateUrl: \'./subir-letra.html\',\n  styleUrl: \'./subir-letra.css\'\n})\nexport class SubirLetra {\n  private subirImagen = inject(Imagenes);\n  private fb = inject(FormBuilder);\n  private subirCancion = inject(Musica);\n  private router = inject(Router);\n\n  imagenFile: File | null = null;\n  enviado = false;\n  exitoso = false;\n\n  onFileChange(event: any) {\n    this.imagenFile = event.target.files[0];\n  }\n\n  form = this.fb.group({\n    titulo: [\'\', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],\n    artista: [\'\', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],\n    albun: [\'\', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],\n    fecha: [\'\', [Validators.required, Validators.min(1900), Validators.max(2026)]],\n    letra: [\'\', [Validators.required, Validators.minLength(50), Validators.maxLength(5000)]],\n  });\n\n  get f() { return this.form.controls; }\n\nguardar() {\n  this.enviado = true;\n\nconst darkSwal = Swal.mixin({\n  background: \'#121212\',\n  color: \'#ffffff\',\n  confirmButtonColor: \'#facc15\',\n  cancelButtonColor: \'#333\'\n});\n\ndarkSwal.fire({\n  title: \'¿Publicar letra?\',\n  text: \'Se subirá la canción a la plataforma\',\n  icon: \'question\',\n  showCancelButton: true,\n  confirmButtonText: \'Sí, publicar\',\n  cancelButtonText: \'Cancelar\'\n}).then((result) => {\n\n  if (result.isConfirmed) {\n\n    this.subirCancion.postCancion(this.form.value as Cancion).subscribe({\n      next: (id) => {\n\n        const formImg = new FormData();\n        formImg.append(\'imagenes\', this.imagenFile!);\n        formImg.append(\'id_producto\', String(id));\n\n        this.subirImagen.postImagen(formImg).subscribe({\n          next: () => {\n\n            darkSwal.fire({\n              icon: \'success\',\n              title: \'¡Letra subida!\',\n              text: \'Se publicó correctamente\',\n              timer: 2000,\n              showConfirmButton: false\n            });\n\n            setTimeout(() => {\n              this.router.navigate([\'/\']);\n            }, 2000);\n\n          },\n          error: () => {\n            setTimeout(() => {\n              this.router.navigate([\'/\']);\n            }, 2000);\n          }\n        });\n\n      },\n      error: () => {\n\n        darkSwal.fire({\n          icon: \'error\',\n          title: \'Error al subir canción\',\n          text: \'No se pudo guardar la información\'\n        });\n\n      }\n    });\n\n  }\n\n});\n}\n\n  cancelar() {\n    this.router.navigate([\'/\']);\n  }\n}', 0),
(27, 'needy', 'Ariana Grande ', 'needy', '2024', 'If you take too long to hit me back\nI can\'t promise you how I\'ll react\nBut all I can say\nIs at least I\'ll wait for you\n\nLately, I\'ve been on a roller coaster\nTryna get a hold of my emotions\nBut all that I know\nIs I need you close\n\nAnd I\'ma scream and shout for what I love\nPassionate, but I don\'t give no fucks\nI admit that I\'m a lil\' messed up\nBut I can hide it when I\'m all dressed up\nI\'m obsessive and I love too hard\nGood at overthinking with my heart\nHow you even think it got this far?\nThis far\n\nAnd I can be needy\nWay too damn needy\nI can be needy\nTell me how good it feels to be needed\nI can be needy\nSo hard to please me\nI know it feels so good to be needed\n\nSorry if I\'m up and down a lot (yeah)\nSorry that I think I\'m not enough\nAnd sorry if I\nSay sorry way too much\n\nYou can go ahead and call me selfish (selfish)\nBut after all this damage, I can\'t help it (help it)\nBut what you can trust\nIs I need your touch\n\nI\'ma scream and shout for what I love\nPassionate, but I don\'t give no fucks\nI admit that I\'m a lil\' messed up\nBut I can hide it when I\'m all dressed up\nI\'m obsessive and I love too hard\nGood at overthinking with my heart\nHow you even think it got this far?\nThis far\n\nAnd I can be needy\nWay too damn needy\nI can be needy\nTell me how good it feels to be needed\nI can be needy\nSo hard to please me\nI know it feels so good to be needed', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `correo` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
